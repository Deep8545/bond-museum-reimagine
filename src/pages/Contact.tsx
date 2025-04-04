
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Send, AlertCircle, CheckCircle, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        toast({
          title: "Message Sent",
          description: "Thank you for your message. We'll respond as soon as possible.",
          variant: "default",
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        
        setIsSubmitting(false);
      }, 1500);
    } else {
      toast({
        title: "Form Validation Error",
        description: "Please fix the errors in the form.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb')] bg-cover bg-center">
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
        </div>
        
        <div className="content-container relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl bond-header mb-6">
              Contact <span className="text-primary">007</span> Museum
            </h1>
            <p className="text-lg md:text-xl mb-8 text-muted-foreground">
              Have questions or feedback? We'd love to hear from you. Reach out to our team using the information below or the contact form.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-16">
        <div className="content-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg p-8 border border-border shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 flex items-center justify-center bg-primary/20 rounded-full">
                  <MapPin className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Visit Us</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                007 Museum<br />
                Nybrogatan 16<br />
                554 39 Jönköping<br />
                Sweden
              </p>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary flex items-center text-sm hover:underline"
              >
                GET DIRECTIONS
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
            
            <div className="bg-card rounded-lg p-8 border border-border shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 flex items-center justify-center bg-primary/20 rounded-full">
                  <Phone className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Contact Details</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium mb-1">PHONE</p>
                  <p className="text-muted-foreground">+46 (0)36-193371</p>
                </div>
                <div>
                  <p className="text-sm font-medium mb-1">EMAIL</p>
                  <a href="mailto:info@007museum.com" className="text-primary hover:underline">
                    info@007museum.com
                  </a>
                </div>
                <div>
                  <p className="text-sm font-medium mb-1">SOCIAL MEDIA</p>
                  <div className="flex space-x-4 mt-2">
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-lg p-8 border border-border shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 flex items-center justify-center bg-primary/20 rounded-full">
                  <Clock className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Hours & Admission</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium mb-1">OPENING HOURS</p>
                  <p className="text-muted-foreground">Monday to Friday: 10AM - 5PM</p>
                  <p className="text-muted-foreground">Saturday and Sunday: 11AM - 4PM</p>
                </div>
                <div>
                  <p className="text-sm font-medium mb-1">ADMISSION PRICES</p>
                  <p className="text-muted-foreground">Adults: 150 SEK</p>
                  <p className="text-muted-foreground">Students/Seniors: 120 SEK</p>
                  <p className="text-muted-foreground">Children (7-17): 80 SEK</p>
                </div>
                <div>
                  <p className="text-sm font-medium mb-1">GROUP BOOKINGS</p>
                  <p className="text-muted-foreground">
                    For groups of 10 or more, please contact us directly to book your visit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form */}
      <section className="py-16 bg-accent">
        <div className="content-container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl bond-header mb-4">Send Us a Message</h2>
              <p className="text-muted-foreground">
                Have a question or request? Use the form below to get in touch with our team.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="bg-card p-8 rounded-lg border border-border shadow-sm">
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-md bg-accent text-foreground border ${
                      errors.name ? 'border-destructive' : 'border-border'
                    } focus:outline-none focus:ring-2 focus:ring-primary`}
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <div className="flex items-center mt-2 text-destructive text-sm">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.name}
                    </div>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-md bg-accent text-foreground border ${
                      errors.email ? 'border-destructive' : 'border-border'
                    } focus:outline-none focus:ring-2 focus:ring-primary`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <div className="flex items-center mt-2 text-destructive text-sm">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.email}
                    </div>
                  )}
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-md bg-accent text-foreground border ${
                      errors.subject ? 'border-destructive' : 'border-border'
                    } focus:outline-none focus:ring-2 focus:ring-primary`}
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Ticket Information">Ticket Information</option>
                    <option value="Group Booking">Group Booking</option>
                    <option value="Donation/Contribution">Donation/Contribution</option>
                    <option value="Press/Media">Press/Media</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.subject && (
                    <div className="flex items-center mt-2 text-destructive text-sm">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.subject}
                    </div>
                  )}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`w-full px-4 py-2 rounded-md bg-accent text-foreground border ${
                      errors.message ? 'border-destructive' : 'border-border'
                    } focus:outline-none focus:ring-2 focus:ring-primary resize-none`}
                    placeholder="Please enter your message here..."
                  ></textarea>
                  {errors.message && (
                    <div className="flex items-center mt-2 text-destructive text-sm">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.message}
                    </div>
                  )}
                </div>
                
                <div className="flex items-start space-x-2">
                  <Info className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <p className="text-sm text-muted-foreground">
                    By submitting this form, you agree to our privacy policy and consent to being contacted regarding your inquiry.
                  </p>
                </div>
                
                <div className="mt-2">
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-primary-foreground" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      
      {/* Map */}
      <section className="py-16">
        <div className="content-container">
          <div className="relative h-96 rounded-lg overflow-hidden border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2146.735089333991!2d14.150924450980891!3d57.78169318758891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465a6df58d0a39cd%3A0xd7f795eb1bd7752d!2sNybrogatan%2016%2C%20554%2039%20J%C3%B6nk%C3%B6ping%2C%20Sweden!5e0!3m2!1sen!2sus!4v1668518733062!5m2!1sen!2sus"
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="007 Museum Location"
            ></iframe>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-accent">
        <div className="content-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl bond-header mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Find answers to common questions about visiting the 007 Museum.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-bold mb-3">Are photos allowed in the museum?</h3>
              <p className="text-muted-foreground">
                Yes, photography for personal use is permitted in most areas of the museum. However, flash photography and tripods are not allowed to protect the exhibits.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-bold mb-3">Is the museum accessible for wheelchair users?</h3>
              <p className="text-muted-foreground">
                Yes, the 007 Museum is wheelchair accessible with ramps and elevators available. Please contact us in advance if you require any special assistance.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-bold mb-3">Do I need to book tickets in advance?</h3>
              <p className="text-muted-foreground">
                While walk-ins are welcome, we recommend booking tickets online in advance, especially during peak season and weekends, to guarantee entry.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-bold mb-3">How long does a typical visit last?</h3>
              <p className="text-muted-foreground">
                Most visitors spend between 1.5 to 2 hours exploring the museum. This can vary depending on your interest level and if you participate in any guided tours.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-bold mb-3">Is there parking available?</h3>
              <p className="text-muted-foreground">
                There is paid parking available near the museum. Several public parking garages are within a 5-minute walk of our location.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-bold mb-3">Can I donate Bond items to the museum?</h3>
              <p className="text-muted-foreground">
                We appreciate contributions to our collection. Please contact our curator directly at curator@007museum.com with information about potential donations.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Can't find what you're looking for?</p>
            <Link to="#" className="text-primary font-medium hover:underline">
              View our complete FAQ page
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
