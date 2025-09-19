import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedService, setSelectedService] = useState("");

  const [workers] = useState([
    {
      id: 1,
      name: "Ramesh Kumar",
      skill: "Plumber",
      rating: 4.8,
      reviews: 156,
      experience: "8 years",
      location: "2.3 km away",
      price: "₹300-500/hour",
      available: true,
      avatar: "RK"
    },
    {
      id: 2,
      name: "Suresh Electrician",
      skill: "Electrician",
      rating: 4.6,
      reviews: 89,
      experience: "5 years",
      location: "1.8 km away",
      price: "₹250-400/hour",
      available: true,
      avatar: "SE"
    },
    {
      id: 3,
      name: "Priya Tutors",
      skill: "Math Tutor",
      rating: 4.9,
      reviews: 234,
      experience: "6 years",
      location: "0.8 km away",
      price: "₹200-350/hour",
      available: false,
      avatar: "PT"
    }
  ]);

  const [bookings] = useState([
    {
      id: 1,
      worker: "Ramesh Kumar",
      service: "Plumbing",
      date: "Today, 2:00 PM",
      status: "confirmed",
      address: "123 Model Town, Chandigarh"
    },
    {
      id: 2,
      worker: "Suresh Electrician",
      service: "Electrical",
      date: "Tomorrow, 10:00 AM",
      status: "pending",
      address: "456 Sector 15, Chandigarh"
    }
  ]);

  const services = [
    { name: "Plumber", icon: Wrench },
    { name: "Electrician", icon: Zap },
    { name: "Tutor", icon: BookOpen },
    { name: "Painter", icon: Paintbrush }
  ];

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
                      <SelectValue placeholder="Select service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Services</SelectItem>
                      <SelectItem value="plumber">Plumber</SelectItem>
                      <SelectItem value="electrician">Electrician</SelectItem>
                      <SelectItem value="tutor">Tutor</SelectItem>
                      <SelectItem value="painter">Painter</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {services.map((service) => (
                    <Card key={service.name} className="cursor-pointer hover:shadow-md transition-shadow">
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
              {workers.map((worker) => (
                <Card key={worker.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className="w-16 h-16 bg-gradient-to-r from-primary to-success rounded-full flex items-center justify-center">
                          <span className="text-white font-semibold">{worker.avatar}</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-lg font-semibold">{worker.name}</h3>
                            {worker.available ? (
                              <Badge variant="default" className="bg-success">Available</Badge>
                            ) : (
                              <Badge variant="outline">Busy</Badge>
                            )}
                          </div>
                          <p className="text-muted-foreground mb-2">{worker.skill} • {worker.experience}</p>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Star size={14} className="text-warning fill-current" />
                              <span className="font-medium">{worker.rating}</span>
                              <span>({worker.reviews})</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin size={14} />
                              <span>{worker.location}</span>
                            </div>
                            <div className="font-medium text-success">
                              {worker.price}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Phone size={16} className="mr-1" />
                          Call
                        </Button>
                        <Button variant="default" size="sm" disabled={!worker.available}>
                          <Calendar size={16} className="mr-1" />
                          Book Now
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
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
                  {bookings.map((booking) => (
                    <div key={booking.id} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h4 className="font-semibold">{booking.service}</h4>
                            <Badge 
                              variant={booking.status === 'confirmed' ? 'default' : 'outline'}
                              className={booking.status === 'confirmed' ? 'bg-success' : ''}
                            >
                              {booking.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-1">
                            Worker: {booking.worker}
                          </p>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Clock size={14} />
                              {booking.date}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin size={14} />
                              {booking.address}
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
                  ))}
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