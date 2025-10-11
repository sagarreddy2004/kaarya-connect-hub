import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  MapPin, 
  Star, 
  Clock, 
  DollarSign,
  Filter,
  Grid,
  List
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface Service {
  id: number;
  title: string;
  description: string;
  category: string;
  provider: {
    id: number;
    name: string;
    avatar: string;
    rating: number;
    reviews: number;
  };
  price: {
    min: number;
    max: number;
  };
  location: string;
  duration: string;
  images: string[];
  featured: boolean;
}

const Services = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [loading, setLoading] = useState(true);

  const categories = [
    'All Services',
    'Home Cleaning',
    'Plumbing',
    'Electrical',
    'Gardening',
    'Carpentry',
    'Painting',
    'Moving & Delivery',
    'Tech Support',
    'Tutoring',
    'Photography'
  ];

  // Mock data - Replace with actual API call
  const mockServices: Service[] = [
    {
      id: 1,
      title: 'Professional Home Cleaning',
      description: 'Deep cleaning service for your home with eco-friendly products',
      category: 'Home Cleaning',
      provider: {
        id: 1,
        name: 'Sarah Johnson',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
        rating: 4.8,
        reviews: 127
      },
      price: { min: 50, max: 150 },
      location: 'Downtown Area',
      duration: '2-4 hours',
      images: ['https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop'],
      featured: true
    },
    {
      id: 2,
      title: 'Expert Plumbing Repairs',
      description: 'Quick and reliable plumbing solutions for all your needs',
      category: 'Plumbing',
      provider: {
        id: 2,
        name: 'Mike Rodriguez',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
        rating: 4.9,
        reviews: 89
      },
      price: { min: 75, max: 200 },
      location: 'City Center',
      duration: '1-3 hours',
      images: ['https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=300&fit=crop'],
      featured: false
    },
    {
      id: 3,
      title: 'Electrical Installation & Repair',
      description: 'Licensed electrician for safe and professional electrical work',
      category: 'Electrical',
      provider: {
        id: 3,
        name: 'David Chen',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
        rating: 4.7,
        reviews: 156
      },
      price: { min: 60, max: 180 },
      location: 'North Side',
      duration: '1-2 hours',
      images: ['https://images.unsplash.com/photo-1621905252472-e8592afb8f4b?w=400&h=300&fit=crop'],
      featured: true
    }
  ];

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setServices(mockServices);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Find Professional Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Connect with skilled professionals in your area
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-4 shadow-lg">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    type="text"
                    placeholder="What service are you looking for?"
                    className="pl-10 h-12 text-gray-900"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Button size="lg" className="h-12 px-8">
                  Search Services
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and View Options */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            {/* Categories Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === (category === 'All Services' ? 'all' : category) ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category === 'All Services' ? 'all' : category)}
                >
                  {category}
                </Button>
              ))}
            </div>
            
            {/* View Toggle */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">
                {filteredServices.length} services found
              </span>
              <div className="flex border rounded-lg">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="rounded-r-none"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="rounded-l-none"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid/List */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredServices.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">No services found</h3>
              <p className="text-gray-600 mb-8">Try adjusting your search criteria</p>
              <Button onClick={() => {setSearchQuery(''); setSelectedCategory('all');}}>
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className={
              viewMode === 'grid' 
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" 
                : "space-y-6"
            }>
              {filteredServices.map((service) => (
                <Card key={service.id} className={`overflow-hidden hover:shadow-lg transition-shadow ${
                  viewMode === 'list' ? 'flex flex-row' : ''
                }`}>
                  <div className={viewMode === 'list' ? 'w-1/3' : 'w-full'}>
                    <img
                      src={service.images[0]}
                      alt={service.title}
                      className={`object-cover ${
                        viewMode === 'list' ? 'h-full w-full' : 'h-48 w-full'
                      }`}
                    />
                  </div>
                  
                  <div className={viewMode === 'list' ? 'flex-1 p-6' : 'p-6'}>
                    <CardHeader className="p-0 mb-4">
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-lg">{service.title}</CardTitle>
                        {service.featured && (
                          <Badge variant="secondary">Featured</Badge>
                        )}
                      </div>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {service.description}
                      </p>
                    </CardHeader>
                    
                    <CardContent className="p-0 space-y-3">
                      {/* Provider Info */}
                      <div className="flex items-center gap-3">
                        <img
                          src={service.provider.avatar}
                          alt={service.provider.name}
                          className="w-10 h-10 rounded-full"
                        />
                        <div>
                          <p className="font-medium text-sm">{service.provider.name}</p>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm">{service.provider.rating}</span>
                            <span className="text-sm text-gray-500">
                              ({service.provider.reviews} reviews)
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Service Details */}
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <DollarSign className="h-4 w-4" />
                          <span>${service.price.min} - ${service.price.max}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{service.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{service.duration}</span>
                        </div>
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="flex gap-2 pt-2">
                        <Button asChild className="flex-1">
                          <Link to={`/services/${service.id}`}>
                            View Details
                          </Link>
                        </Button>
                        <Button variant="outline" className="flex-1">
                          Contact Provider
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
