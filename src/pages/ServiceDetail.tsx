import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Star, 
  MapPin, 
  Clock, 
  DollarSign, 
  Shield, 
  Award,
  MessageCircle,
  Heart,
  ArrowLeft,
  Calendar,
  CheckCircle
} from 'lucide-react';

const ServiceDetail = () => {
  const { id } = useParams();
  const [service, setService] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock API call - replace with actual API
    setTimeout(() => {
      setService({
        id: parseInt(id || '1'),
        title: 'Professional Home Cleaning',
        description: 'Deep cleaning service for your home with eco-friendly products. Our comprehensive cleaning service includes dusting, vacuuming, mopping, bathroom sanitization, kitchen cleaning, and more.',
        category: 'Home Cleaning',
        provider: {
          id: 1,
          name: 'Sarah Johnson',
          avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
          rating: 4.8,
          reviews: 127,
          joinedDate: '2022-03-15',
          completedJobs: 156,
          verified: true,
          bio: 'Professional cleaner with 5+ years of experience. Specialized in eco-friendly cleaning solutions and deep cleaning services.'
        },
        price: { min: 50, max: 150 },
        location: 'Downtown Area',
        duration: '2-4 hours',
        images: [
          'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop',
          'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
          'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=400&fit=crop'
        ],
        features: [
          'Eco-friendly cleaning products',
          'Fully insured and bonded',
          'Flexible scheduling',
          'Satisfaction guaranteed',
          'Background-checked staff'
        ],
        reviews: [
          {
            id: 1,
            user: 'John Doe',
            rating: 5,
            comment: 'Excellent service! Sarah did an amazing job cleaning my apartment.',
            date: '2024-09-15'
          },
          {
            id: 2,
            user: 'Mary Smith',
            rating: 5,
            comment: 'Very professional and thorough. Would definitely book again.',
            date: '2024-09-10'
          }
        ],
        availability: ['Monday', 'Tuesday', 'Wednesday', 'Friday', 'Saturday']
      });
      setLoading(false);
    }, 1000);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!service) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Service not found</h1>
          <Button asChild>
            <Link to="/services">Browse Services</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-6">
          <Link to="/services">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Services
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <img
                src={service.images[0]}
                alt={service.title}
                className="w-full h-64 md:h-80 object-cover rounded-lg"
              />
              <div className="grid grid-cols-2 gap-2">
                {service.images.slice(1).map((image: string, index: number) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${service.title} ${index + 2}`}
                    className="w-full h-32 md:h-39 object-cover rounded-lg"
                  />
                ))}
              </div>
            </div>

            {/* Service Info */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                    <Badge variant="secondary">{service.category}</Badge>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Heart className="h-5 w-5" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                {/* Features */}
                <div className="mb-6">
                  <h3 className="font-semibold mb-3">What's included:</h3>
                  <ul className="space-y-2">
                    {service.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Service Details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="text-sm text-gray-600">Price Range</p>
                      <p className="font-semibold">${service.price.min} - ${service.price.max}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="text-sm text-gray-600">Duration</p>
                      <p className="font-semibold">{service.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="text-sm text-gray-600">Location</p>
                      <p className="font-semibold">{service.location}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Reviews */}
            <Card>
              <CardHeader>
                <CardTitle>Customer Reviews</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {service.reviews.map((review: any) => (
                    <div key={review.id} className="border-b pb-4 last:border-b-0">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{review.user}</span>
                          <div className="flex">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                      <p className="text-gray-600">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Provider Card */}
            <Card>
              <CardHeader>
                <CardTitle>Service Provider</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <img
                    src={service.provider.avatar}
                    alt={service.provider.name}
                    className="w-20 h-20 rounded-full mx-auto mb-3"
                  />
                  <h3 className="font-semibold text-lg">{service.provider.name}</h3>
                  <div className="flex items-center justify-center gap-1 mb-2">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span>{service.provider.rating}</span>
                    <span className="text-gray-500">({service.provider.reviews} reviews)</span>
                  </div>
                  {service.provider.verified && (
                    <Badge variant="default" className="mb-3">
                      <Shield className="h-3 w-3 mr-1" />
                      Verified
                    </Badge>
                  )}
                </div>

                <p className="text-sm text-gray-600 mb-4">{service.provider.bio}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span>Member since:</span>
                    <span>{new Date(service.provider.joinedDate).getFullYear()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Jobs completed:</span>
                    <span>{service.provider.completedJobs}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Button className="w-full">
                    <Calendar className="h-4 w-4 mr-2" />
                    Book Now
                  </Button>
                  <Button variant="outline" className="w-full">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Message
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Availability */}
            <Card>
              <CardHeader>
                <CardTitle>Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                    <div key={day} className="flex justify-between items-center">
                      <span>{day}</span>
                      <span className={service.availability.includes(day) ? 'text-green-600' : 'text-red-600'}>
                        {service.availability.includes(day) ? 'Available' : 'Unavailable'}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ServiceDetail;