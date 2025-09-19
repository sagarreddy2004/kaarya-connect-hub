import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
import Header from "@/components/Header";

const WorkerDashboard = () => {
  const [jobRequests] = useState([
    {
      id: 1,
      customer: "Priya Sharma",
      service: "Plumbing",
      description: "Kitchen sink pipe leakage repair",
      location: "Sector 15, Chandigarh",
      timeSlot: "Tomorrow, 2:00 PM",
      budget: "₹500-800",
      status: "pending"
    },
    {
      id: 2,
      customer: "Raj Kumar",
      service: "Electrical",
      description: "Fan installation in bedroom",
      location: "Model Town, Chandigarh",
      timeSlot: "Today, 4:00 PM",
      budget: "₹300-500",
      status: "pending"
    }
  ]);

  const [earnings] = useState({
    thisMonth: 12500,
    lastMonth: 10800,
    total: 45600,
    jobs: 23
  });

  const workerProfile = {
    name: "Ramesh Kumar",
    skill: "Plumber",
    experience: "8 years",
    rating: 4.8,
    reviews: 156,
    phone: "+91 98765 43210",
    email: "ramesh.kumar@email.com",
    location: "Chandigarh, Punjab"
  };

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
                  <div className="text-2xl font-bold text-warning">2</div>
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
                    <div key={job.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-semibold">{job.service} - {job.customer}</h4>
                        <p className="text-sm text-muted-foreground">{job.description}</p>
                        <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <MapPin size={14} />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar size={14} />
                            {job.timeSlot}
                          </span>
                          <span className="font-medium text-success">{job.budget}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="success">
                          <CheckCircle size={16} className="mr-1" />
                          Accept
                        </Button>
                        <Button size="sm" variant="outline">
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
                    <div key={job.id} className="p-4 border rounded-lg">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h4 className="font-semibold">{job.service}</h4>
                            <Badge variant="outline">{job.status}</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">{job.description}</p>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <strong>Customer:</strong> {job.customer}
                            </div>
                            <div>
                              <strong>Budget:</strong> {job.budget}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin size={14} />
                              {job.location}
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar size={14} />
                              {job.timeSlot}
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2 ml-4">
                          <Button variant="success">Accept</Button>
                          <Button variant="outline">Decline</Button>
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