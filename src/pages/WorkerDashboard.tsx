import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { 
  User, 
  Bell, 
  Star, 
  DollarSign, 
  Calendar, 
  MapPin, 
  Phone, 
  Mail,
  CheckCircle,
  Clock,
  X
} from "lucide-react";
import { API_URL } from "@/config/api";
import Header from "@/components/Header";

const WorkerDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [jobRequests, setJobRequests] = useState<any[]>([]);
  const [workerProfile, setWorkerProfile] = useState<any>(null);
  const [earnings, setEarnings] = useState({
    thisMonth: 0,
    lastMonth: 0,
    total: 0,
    jobs: 0
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    if (!token || !user) {
      navigate("/login");
      return;
    }

    const userData = JSON.parse(user);
    if (userData.role !== "worker") {
      toast({
        title: "Access Denied",
        description: "This page is only for workers",
        variant: "destructive",
      });
      navigate("/customer-dashboard");
      return;
    }

    // Set worker profile from stored user data
    setWorkerProfile({
      name: `${userData.firstName} ${userData.lastName}`,
      skill: userData.profession || "Service Provider",
      experience: userData.experience || "N/A",
      rating: userData.rating || 4.5,
      reviews: userData.reviewCount || 0,
      phone: userData.phone || "Not provided",
      email: userData.email,
      location: userData.location || "Not provided"
    });

    fetchWorkerData();
  }, [navigate, toast]);

  const fetchWorkerData = async () => {
    try {
      const token = localStorage.getItem('token');
      const user = localStorage.getItem('user');
      
      if (!token || !user) {
        navigate('/login');
        return;
      }

      const userData = JSON.parse(user);

      // Fetch jobs directly for this worker
      const workerId = userData._id || userData.id;
      const jobsResponse = await fetch(`${API_URL}/api/jobs/worker/${workerId}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      let jobsData: any[] = [];
      if (jobsResponse.ok) {
        jobsData = await jobsResponse.json();
        setJobRequests(jobsData);
      }

      // Fetch payments for earnings
      try {
        const paymentsResponse = await fetch(`${API_URL}/api/payments`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        
        if (paymentsResponse.ok) {
          const paymentsData = await paymentsResponse.json();
          
          const now = new Date();
          const currentMonth = now.getMonth();
          const lastMonth = currentMonth === 0 ? 11 : currentMonth - 1;
          
          const thisMonthEarnings = paymentsData
            .filter((p: any) => new Date(p.createdAt).getMonth() === currentMonth)
            .reduce((sum: number, p: any) => sum + p.amount, 0);
          
          const lastMonthEarnings = paymentsData
            .filter((p: any) => new Date(p.createdAt).getMonth() === lastMonth)
            .reduce((sum: number, p: any) => sum + p.amount, 0);
          
          const totalEarnings = paymentsData.reduce((sum: number, p: any) => sum + p.amount, 0);
          const completedJobs = jobsData.filter((j: any) => j.status === 'completed').length;
          
          setEarnings({
            thisMonth: thisMonthEarnings,
            lastMonth: lastMonthEarnings,
            total: totalEarnings,
            jobs: completedJobs
          });
        }
      } catch (error) {
        console.log('Could not fetch payments, using default earnings');
      }

    } catch (error) {
      console.error('Error fetching worker data:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to load dashboard data"
      });
    } finally {
      setIsLoading(false);
    }
  };

const handleAcceptJob = async (jobId: string) => {
  try {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_URL}/api/jobs/${jobId}/status`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ status: 'accepted' })
    });

    if (response.ok) {
      toast({
        title: "Success!",
        description: "Job request accepted"
      });
      fetchWorkerData();
    }
  } catch (error) {
    toast({
      variant: "destructive",
      title: "Error",
      description: "Failed to accept job"
    });
  }
};

const handleDeclineJob = async (jobId: string) => {
  try {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_URL}/api/jobs/${jobId}/status`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ status: 'declined' })
    });

    if (response.ok) {
      toast({
        title: "Success!",
        description: "Job request declined"
      });
      fetchWorkerData();
    }
  } catch (error) {
    toast({
      variant: "destructive",
      title: "Error",
      description: "Failed to decline job"
    });
  }
};

  if (isLoading || !workerProfile) {
    return (
      <div className="min-h-screen bg-secondary">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-secondary">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Welcome back, {workerProfile.name}!
          </h1>
          <p className="text-muted-foreground">
            Manage your profile, jobs, and earnings from your dashboard.
          </p>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="jobs">Job Requests</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="earnings">Earnings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Pending Jobs</CardTitle>
                  <Bell className="h-4 w-4 text-warning" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-warning">{jobRequests.length}</div>
                  <p className="text-xs text-muted-foreground">New requests today</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">This Month</CardTitle>
                  <DollarSign className="h-4 w-4 text-success" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-success">₹{earnings.thisMonth.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground">+15% from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Rating</CardTitle>
                  <Star className="h-4 w-4 text-warning" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{workerProfile.rating}</div>
                  <p className="text-xs text-muted-foreground">{workerProfile.reviews} reviews</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Recent Job Requests</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {jobRequests.slice(0, 2).map((job) => (
                    <div key={job._id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-semibold">{job.title || job.category}</h4>
                        <p className="text-sm text-muted-foreground">{job.description}</p>
                        <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <MapPin size={14} />
                            {job.location || "Not specified"}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar size={14} />
                            {job.date ? new Date(job.date).toLocaleDateString() : "TBD"}
                          </span>
                          <span className="font-medium text-success">
                            ₹{job.budget || job.price || "Negotiable"}
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="success" onClick={() => handleAcceptJob(job._id)}>
                          <CheckCircle size={16} className="mr-1" />
                          Accept
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => handleDeclineJob(job._id)}>
                          <X size={16} className="mr-1" />
                          Decline
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="jobs" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Job Requests</CardTitle>
                <p className="text-muted-foreground">Manage incoming job requests</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {jobRequests.map((job) => (
                    <div key={job._id} className="p-4 border rounded-lg">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h4 className="font-semibold">{job.title || job.category}</h4>
                            <Badge variant="outline">{job.status}</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">{job.description}</p>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <strong>Customer:</strong> {job.customerId?.firstName || "N/A"}
                            </div>
                            <div>
                              <strong>Budget:</strong> ₹{job.budget || job.price || "Negotiable"}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin size={14} />
                              {job.location || "Not specified"}
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar size={14} />
                              {job.date ? new Date(job.date).toLocaleDateString() : "TBD"}
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2 ml-4">
                          <Button variant="success" onClick={() => handleAcceptJob(job._id)}>Accept</Button>
                          <Button variant="outline" onClick={() => handleDeclineJob(job._id)}>Decline</Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <p className="text-muted-foreground">Manage your professional profile</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 bg-gradient-to-r from-primary to-success rounded-full flex items-center justify-center">
                    <User size={32} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{workerProfile.name}</h3>
                    <p className="text-muted-foreground">{workerProfile.skill} • {workerProfile.experience}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Star size={16} className="text-warning fill-current" />
                      <span className="font-medium">{workerProfile.rating}</span>
                      <span className="text-sm text-muted-foreground">({workerProfile.reviews} reviews)</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Phone size={16} className="text-muted-foreground" />
                      <span>{workerProfile.phone}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail size={16} className="text-muted-foreground" />
                      <span>{workerProfile.email}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin size={16} className="text-muted-foreground" />
                      <span>{workerProfile.location}</span>
                    </div>
                  </div>
                  <div>
                    <Button variant="outline" className="w-full">
                      Edit Profile
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="earnings" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">This Month</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-success">₹{earnings.thisMonth.toLocaleString()}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Last Month</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">₹{earnings.lastMonth.toLocaleString()}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Total Earned</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">₹{earnings.total.toLocaleString()}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Jobs Completed</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{earnings.jobs}</div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default WorkerDashboard;