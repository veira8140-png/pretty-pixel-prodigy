import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

export const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: 'Message sent!',
      description: 'We will get back to you within 24 hours.',
    });

    setFormData({ name: '', email: '', phone: '', business: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 xl:gap-20">
          {/* Left Content */}
          <div>
            <span className="text-xs sm:text-sm font-semibold text-accent uppercase tracking-wider">Get Started</span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 sm:mt-4 mb-4 sm:mb-6">
              Ready to make your business run better?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-10">
              Tell us about your business. We will show you how Veira can help. No pressure. Just a conversation about what you need.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="w-4 sm:w-5 h-4 sm:h-5 text-accent" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Call us</div>
                  <div className="font-medium text-foreground text-sm sm:text-base">+254 755 792 377</div>
                </div>
              </div>
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="w-4 sm:w-5 h-4 sm:h-5 text-accent" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Email us</div>
                  <div className="font-medium text-foreground text-sm sm:text-base">hello@veira.co.ke</div>
                </div>
              </div>
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="w-4 sm:w-5 h-4 sm:h-5 text-accent" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Visit us</div>
                  <div className="font-medium text-foreground text-sm sm:text-base">Ruprani House, Moktar Daddah St, Nairobi</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-card border border-border rounded-lg p-5 sm:p-6 lg:p-8">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 lg:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                    Your Name
                  </label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Kamau"
                    required
                    className="text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+254 712 345 678"
                    required
                    className="text-sm sm:text-base"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                  Email Address
                </label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  required
                  className="text-sm sm:text-base"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                  Business Type
                </label>
                <Input
                  type="text"
                  value={formData.business}
                  onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                  placeholder="e.g., Retail shop, Restaurant, Pharmacy"
                  required
                  className="text-sm sm:text-base"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                  Tell us about your business
                </label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="What challenges are you facing? What would help your business run better?"
                  rows={4}
                  className="text-sm sm:text-base"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-5 sm:py-6 text-base sm:text-lg font-semibold"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 w-4 sm:w-5 h-4 sm:h-5" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
