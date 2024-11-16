import React from 'react';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';

const Map = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Address</p>
                  <p>1142 Florida Street, Suite 5</p>
                  <p>San Francisco, CA 94110</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <a href="tel:+14156787296" className="hover:text-blue-600">+1 (415) 678-7296</a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Email</p>
                  <a href="mailto:info@negusgroup.net" className="hover:text-blue-600">info@negusgroup.net</a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Globe className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Website</p>
                  <a href="https://www.negusgroup.net" className="hover:text-blue-600">www.negusgroup.net</a>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.9307890856366!2d-122.41089868441787!3d37.75022087976233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e3c6aacd369%3A0x85b0c4f7f14a7d3e!2s1142%20Florida%20St%2C%20San%20Francisco%2C%20CA%2094110!5e0!3m2!1sen!2sus!4v1645564852167!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Negus Group Inc. Location"
              className="absolute inset-0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;