
import { Link } from 'react-router-dom';
import { FacebookIcon, TwitterIcon, InstagramIcon, YoutubeIcon, Mail, Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary pt-16 pb-8 text-foreground">
      <div className="content-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Museum Information */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4 text-primary">007 MUSEUM</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-muted-foreground mt-0.5" />
                <span>Emmabodavägen 20, 382 45 Nybro, Sweden</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-muted-foreground" />
                <span>+46 (0)491-129-50</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-muted-foreground" />
                <a href="mailto:info@007museum.com" className="hover:text-primary transition-colors">info@007museum.com</a>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 mr-2 text-muted-foreground mt-0.5" />
                <div>
                  <p>Monday-Friday: 10AM - 5PM</p>
                  <p>Saturday-Sunday: 11AM - 4PM</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4 text-primary">QUICK LINKS</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About the Museum</Link></li>
              <li><Link to="/gallery" className="hover:text-primary transition-colors">Exhibits & Gallery</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Tickets & Admission</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Events</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Press & Media</Link></li>
            </ul>
          </div>

          {/* Visit Information */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4 text-primary">PLAN YOUR VISIT</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="hover:text-primary transition-colors">Getting Here</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Accessibility</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Group Tours</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Gift Shop</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">FAQs</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4 text-primary">NEWSLETTER</h3>
            <p className="mb-4">Subscribe to our newsletter for updates on new exhibits, events, and special offers.</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-md bg-accent text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-2 rounded-md font-medium hover:bg-primary/90 transition-colors"
              >
                SUBSCRIBE
              </button>
            </form>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter">
                <TwitterIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="YouTube">
                <YoutubeIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} 007 Museum. All rights reserved.</p>
          <div className="mt-2">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a> | 
            <a href="#" className="hover:text-primary transition-colors ml-2">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
