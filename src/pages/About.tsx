import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Award, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About Kaarya Connect Hub
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Connecting skilled workers with customers who need their services, 
            building a stronger community one job at a time.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                We believe that everyone deserves access to quality services and meaningful work opportunities. 
                Our platform bridges the gap between skilled professionals and customers, creating a thriving 
                ecosystem where both parties can succeed.
              </p>
              <p className="text-lg text-gray-600">
                Whether you're a customer looking for reliable services or a worker seeking new opportunities, 
                Kaarya Connect Hub is here to make those connections happen seamlessly and safely.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-900">10,000+</h3>
                  <p className="text-gray-600">Active Users</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Target className="h-12 w-12 mx-auto mb-4 text-green-600" />
                  <h3 className="text-2xl font-bold text-gray-900">50,000+</h3>
                  <p className="text-gray-600">Jobs Completed</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Award className="h-12 w-12 mx-auto mb-4 text-purple-600" />
                  <h3 className="text-2xl font-bold text-gray-900">4.9/5</h3>
                  <p className="text-gray-600">Average Rating</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Heart className="h-12 w-12 mx-auto mb-4 text-red-600" />
                  <h3 className="text-2xl font-bold text-gray-900">98%</h3>
                  <p className="text-gray-600">Satisfaction Rate</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Trust & Safety</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  We prioritize the safety and security of all our users through verification, 
                  ratings, and secure payment systems.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Quality Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  We maintain high standards by connecting customers with verified, 
                  skilled professionals who deliver exceptional results.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Community Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  We foster a supportive community where workers can grow their businesses 
                  and customers can find reliable services.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
