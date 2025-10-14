import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { API_URL } from "@/config/api";
import { 
  Search, 
  Star, 
  MapPin, 
  Phone, 
  Clock, 
  User,
  Calendar,
  MessageCircle,
  Wrench,
  Zap,
  BookOpen,
  Paintbrush
} from "lucide-react";
import Header from "@/components/Header";

const CustomerDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedService, setSelectedService] = useState("all");
  const [workers, setWorkers] = useState<any[]>([]);
  const [bookings, setBookings] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    if (!token || !user) {
      navigate("/login");
      return;
    }

    const userData = JSON.parse(user);
    if (userData.role !== "customer") {
      toast({
        title: "Access Denied",
        description: "This page is only for customers",
        variant: "destructive",
      });
      navigate("/worker-dashboard");
      return;
    }

    fetchCustomerData();
  }, [navigate, toast]);

  const fetchCustomerData = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }

      // Fetch workers
      const workersResponse = await fetch(`${API_URL}/api/users`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (workersResponse.ok) {
        const usersData = await workersResponse.json();
        const workersData = usersData.filter((user: any) => user.role === 'worker');
        setWorkers(workersData);
      }

      // Fetch bookings for this customer only
      const user = localStorage.getItem('user');
      let currentUserId: string | undefined;
      if (user) {
        const u = JSON.parse(user);
        currentUserId = u._id || u.id;
      }

      const bookingsResponse = await fetch(`${API_URL}/api/jobs/customer/${currentUserId}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (bookingsResponse.ok) {
        const bookingsData = await bookingsResponse.json();
        setBookings(bookingsData);
      }

    } catch (error) {
      console.error('Error fetching customer data:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to load dashboard data"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleBookWorker = async (workerId: string) => {
    try {
      const token = localStorage.getItem('token');
      const user = localStorage.getItem('user');
      
      if (!token || !user) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Please login to book a worker"
        });
        return;
      }

      const userData = JSON.parse(user);
      const customerId = userData._id || userData.id;

      console.log('Booking worker:', { customerId, workerId, userData });

      const response = await fetch(`${API_URL}/api/jobs`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          customerId,
          workerId,
            // Basic booking fields - location/budget optional
          title: 'Service Booking',
          description: `Booking request from customer ${userData.firstName || ''}`,
          status: 'pending',
          category: 'Service Request'
        })
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Job created:', data);
        toast({
          title: "Success!",
          description: "Worker booked successfully"
        });
        fetchCustomerData();
      } else {
        const error = await response.json();
        throw new Error(error.message || 'Failed to book worker');
      }
    } catch (error: any) {
      console.error('Booking error:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Failed to book worker"
      });
    }
  };
  const services = [
    { name: "Plumber", icon: Wrench },
    { name: "Electrician", icon: Zap },
    { name: "Tutor", icon: BookOpen },
    { name: "Painter", icon: Paintbrush }
  ];

  const filteredWorkers = workers.filter((worker) => {
    const matchesSearch = worker.firstName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          worker.lastName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          worker.profession?.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Fix: Compare lowercase values and handle "all" case properly
    const matchesService = !selectedService || 
                          selectedService === "all" || 
                          worker.profession?.toLowerCase() === selectedService.toLowerCase();
    
    return matchesSearch && matchesService;
  });

  if (isLoading) {
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
            Find Local Workers
          </h1>
          <p className="text-muted-foreground">
            Search for verified professionals in your area.
          </p>
        </div>

        <Tabs defaultValue="search" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="search">Find Workers</TabsTrigger>
            <TabsTrigger value="bookings">My Bookings</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>

          <TabsContent value="search" className="space-y-6">
            {/* Search Section */}
            <Card>
              <CardHeader>
                <CardTitle>Search Workers</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search by skill or name..."
                      className="pl-10"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <Select value={selectedService} onValueChange={setSelectedService}>
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder="All Services" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Services</SelectItem>
                      <SelectItem value="Plumber">Plumber</SelectItem>
                      <SelectItem value="Electrician">Electrician</SelectItem>
                      <SelectItem value="Tutor">Tutor</SelectItem>
                      <SelectItem value="Painter">Painter</SelectItem>
                      <SelectItem value="Carpenter">Carpenter</SelectItem>
                      <SelectItem value="Cleaner">Cleaner</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {services.map((service) => (
                    <Card 
                      key={service.name} 
                      className="cursor-pointer hover:shadow-md transition-shadow"
                      onClick={() => setSelectedService(service.name)}
                    >
                      <CardContent className="p-4 text-center">
                        <service.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                        <p className="text-sm font-medium">{service.name}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Workers List */}
            <div className="space-y-4">
              {filteredWorkers.length > 0 ? (
                filteredWorkers.map((worker) => (
                  <Card key={worker._id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4">
                          <div className="w-16 h-16 bg-gradient-to-r from-primary to-success rounded-full flex items-center justify-center">
                            <span className="text-white font-semibold">
                              {worker.firstName?.[0]}{worker.lastName?.[0]}
                            </span>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="text-lg font-semibold">
                                {worker.firstName} {worker.lastName}
                              </h3>
                              <Badge variant="default" className="bg-success">Available</Badge>
                            </div>
                            <p className="text-muted-foreground mb-2">
                              {worker.profession || "Service Provider"} • {worker.experience || "N/A"}
                            </p>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Star size={14} className="text-warning fill-current" />
                                <span className="font-medium">{worker.rating || 4.5}</span>
                                <span>({worker.reviewCount || 0})</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin size={14} />
                                <span>{worker.location || "Not specified"}</span>
                              </div>
                              <div className="font-medium text-success">
                                ₹{worker.hourlyRate || "300-500"}/hour
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Phone size={16} className="mr-1" />
                            Call
                          </Button>
                          <Button 
                            variant="default" 
                            size="sm"
                            onClick={() => handleBookWorker(worker._id)}
                          >
                            <Calendar size={16} className="mr-1" />
                            Book Now
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <Card>
                  <CardContent className="p-8 text-center text-muted-foreground">
                    <p>No workers found matching your criteria.</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>

          <TabsContent value="bookings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Bookings</CardTitle>
                <p className="text-muted-foreground">Manage your scheduled services</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {bookings.length > 0 ? (
                    bookings.map((booking) => (
                      <div key={booking._id} className="p-4 border rounded-lg">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h4 className="font-semibold">{booking.title || booking.category}</h4>
                              <Badge 
                                variant={booking.status === 'accepted' || booking.status === 'confirmed' ? 'default' : 'outline'}
                                className={booking.status === 'accepted' || booking.status === 'confirmed' ? 'bg-success' : ''}
                              >
                                {booking.status}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mb-1">
                              Worker: {booking.workerId?.firstName} {booking.workerId?.lastName}
                            </p>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Clock size={14} />
                                {booking.date ? new Date(booking.date).toLocaleString() : "TBD"}
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin size={14} />
                                {booking.location || "Not specified"}
                              </div>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              <MessageCircle size={16} className="mr-1" />
                              Chat
                            </Button>
                            <Button variant="outline" size="sm">
                              Reschedule
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8 text-muted-foreground">
                      <Calendar size={48} className="mx-auto mb-4 opacity-50" />
                      <p>No bookings yet.</p>
                      <p className="text-sm">Book a worker to get started.</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Service History</CardTitle>
                <p className="text-muted-foreground">Your completed bookings and reviews</p>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-muted-foreground">
                  <Calendar size={48} className="mx-auto mb-4 opacity-50" />
                  <p>No completed services yet.</p>
                  <p className="text-sm">Your service history will appear here.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CustomerDashboard;