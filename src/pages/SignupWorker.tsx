import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Eye, EyeOff, User, Mail, Phone, MapPin, Briefcase } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";

const SignupWorker = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    location: "",
    skill: "",
    experience: "",
    description: ""
  });

  const skills = [
    "Plumber", "Electrician", "Tutor", "Painter", "Carpenter", 
    "Mechanic", "Cleaner", "Beauty/Salon", "Chef/Cook", "Gardener",
    "Tech Support", "Home Repairs", "Other"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match",
        variant: "destructive",
      });
      return;
    }

    if (formData.password.length < 6) {
      toast({
        title: "Error",
        description: "Password must be at least 6 characters long",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      // Call backend API
      const response = await fetch('http://localhost:3000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.fullName,
          email: formData.email,
          password: formData.password,
          firstName: formData.fullName.split(' ')[0],
          lastName: formData.fullName.split(' ').slice(1).join(' ') || formData.fullName.split(' ')[0],
          role: 'worker',
          phone: formData.phone,
          location: formData.location,
          profession: formData.skill,
          experience: formData.experience,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Account created successfully. Please login.",
        });
        
        // Redirect to login page after 1.5 seconds
        setTimeout(() => {
          navigate('/login');
        }, 1500);
      } else {
        toast({
          title: "Error",
          description: data.message || "Failed to create account",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Signup error:', error);
      toast({
        title: "Error",
        description: "Network error. Please check if the backend is running.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-secondary">
      <Header />
      
      <div className="flex items-center justify-center py-12 px-4">
        <Card className="w-full max-w-2xl shadow-medium">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-foreground">
              Join as a Worker
            </CardTitle>
            <p className="text-muted-foreground">
              Start earning by offering your skills to the local community
            </p>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name *</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="fullName"
                      placeholder="Enter your full name"
                      className="pl-10"
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="pl-10"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      className="pl-10"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="location">Location *</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="location"
                      placeholder="City, State"
                      className="pl-10"
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                      required
                    />
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="skill">Primary Skill *</Label>
                  <Select value={formData.skill} onValueChange={(value) => setFormData({...formData, skill: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your primary skill" />
                    </SelectTrigger>
                    <SelectContent>
                      {skills.map((skill) => (
                        <SelectItem key={skill} value={skill}>
                          {skill}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="experience">Experience *</Label>
                  <Select value={formData.experience} onValueChange={(value) => setFormData({...formData, experience: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Years of experience" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-1">0-1 years</SelectItem>
                      <SelectItem value="2-5">2-5 years</SelectItem>
                      <SelectItem value="5-10">5-10 years</SelectItem>
                      <SelectItem value="10+">10+ years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">About Your Services</Label>
                <Textarea
                  id="description"
                  placeholder="Briefly describe your skills and services..."
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  rows={3}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="password">Password *</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a password"
                      className="pr-10"
                      value={formData.password}
                      onChange={(e) => setFormData({...formData, password: e.target.value})}
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-3 text-muted-foreground"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password *</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                    required
                  />
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="terms" className="rounded" required />
                <label htmlFor="terms" className="text-sm text-muted-foreground">
                  I agree to the{" "}
                  <Link to="/terms" className="text-primary hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link to="/privacy" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>
                </label>
              </div>
              
              <Button type="submit" variant="worker" className="w-full" disabled={isLoading}>
                {isLoading ? "Creating Account..." : "Create Worker Account"}
              </Button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-muted-foreground">
                Already have an account?{" "}
                <Link to="/login" className="text-primary hover:underline font-medium">
                  Sign in here
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SignupWorker;