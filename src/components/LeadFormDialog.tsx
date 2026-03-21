import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";

interface LeadFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const LeadFormDialog = ({ open, onOpenChange }: LeadFormDialogProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [weddingDate, setWeddingDate] = useState<Date>();
  const [budget, setBudget] = useState("");
  const [events, setEvents] = useState("");
  const [vision, setVision] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const SHEET_URL = "https://script.google.com/macros/s/AKfycbxKPPIUZeblM0BRcJDYD-jRkfmavKSSf7qvaJ7NwHXw7t53BiJJ4S65bezz3VvMtq2t/exec";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) return;

    setSubmitting(true);

    const lead = {
      name,
      email,
      phone,
      weddingDate: weddingDate ? format(weddingDate, "PPP") : "",
      budget,
      events,
      vision,
      submittedAt: new Date().toISOString(),
    };

    try {
      await fetch(SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      });
    } catch (err) {
      console.error("Failed to submit lead:", err);
    }

    setSubmitting(false);
    onOpenChange(false);
    setName("");
    setEmail("");
    setPhone("");
    setWeddingDate(undefined);
    setBudget("");
    setEvents("");
    setVision("");
    toast({
      title: "Welcome to Ruhi ✨",
      description: "We'll be in touch within 24 hours to begin your journey.",
    });
  };

  const inputClass =
    "w-full border-b border-champagne/30 bg-transparent py-2 font-lato text-sm text-parchment placeholder:text-parchment/30 focus:border-champagne focus:outline-none transition-colors";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto border-champagne/20 bg-maroon p-0 sm:max-w-lg">
        <DialogHeader className="px-8 pt-8">
          <DialogTitle className="font-cormorant text-3xl font-light text-parchment">
            Begin Your <span className="italic">रूही</span> Journey
          </DialogTitle>
          <p className="mt-1 font-lato text-xs text-parchment/40">
            Tell us a little about your celebration
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5 px-8 pb-8 pt-4">
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className={inputClass}
          />
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={inputClass}
          />
          <input
            type="tel"
            placeholder="Phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className={inputClass}
          />

          {/* Wedding Date */}
          <div>
            <label className="mb-1 block font-lato text-xs text-parchment/40">
              Wedding date
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <button
                  type="button"
                  className={cn(
                    inputClass,
                    "flex items-center justify-between text-left",
                    !weddingDate && "text-parchment/30"
                  )}
                >
                  {weddingDate ? format(weddingDate, "PPP") : "Select a date"}
                  <CalendarIcon className="h-4 w-4 text-parchment/30" />
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-auto border-champagne/20 bg-maroon p-0" align="start">
                <Calendar
                  mode="single"
                  selected={weddingDate}
                  onSelect={setWeddingDate}
                  disabled={(date) => date < new Date()}
                  className={cn("p-3 pointer-events-auto text-parchment")}
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Budget */}
          <div>
            <label className="mb-1 block font-lato text-xs text-parchment/40">
              Estimated outfit budget
            </label>
            <Select value={budget} onValueChange={setBudget}>
              <SelectTrigger className="border-0 border-b border-champagne/30 bg-transparent font-lato text-sm text-parchment shadow-none focus:ring-0">
                <SelectValue placeholder="Select range" />
              </SelectTrigger>
              <SelectContent className="border-champagne/20 bg-maroon">
                <SelectItem value="1-3L" className="text-parchment">₹1–3 Lakh</SelectItem>
                <SelectItem value="3-5L" className="text-parchment">₹3–5 Lakh</SelectItem>
                <SelectItem value="5-7L" className="text-parchment">₹5–7 Lakh</SelectItem>
                <SelectItem value="7L+" className="text-parchment">₹7 Lakh+</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Events */}
          <div>
            <label className="mb-1 block font-lato text-xs text-parchment/40">
              Number of events
            </label>
            <Select value={events} onValueChange={setEvents}>
              <SelectTrigger className="border-0 border-b border-champagne/30 bg-transparent font-lato text-sm text-parchment shadow-none focus:ring-0">
                <SelectValue placeholder="How many events?" />
              </SelectTrigger>
              <SelectContent className="border-champagne/20 bg-maroon">
                <SelectItem value="1-3" className="text-parchment">1–3 events</SelectItem>
                <SelectItem value="4-6" className="text-parchment">4–6 events</SelectItem>
                <SelectItem value="7+" className="text-parchment">7+ events</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Vision */}
          <div>
            <label className="mb-1 block font-lato text-xs text-parchment/40">
              Tell us about your vision
            </label>
            <textarea
              placeholder="Colors you love, designers you admire, how you want to feel…"
              value={vision}
              onChange={(e) => setVision(e.target.value)}
              rows={3}
              className={cn(inputClass, "resize-none")}
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="mt-4 w-full bg-champagne py-3 font-lato text-xs uppercase tracking-[0.25em] text-charcoal transition-all duration-200 hover:bg-champagne/90 active:scale-[0.97] disabled:opacity-50"
          >
            {submitting ? "Sending…" : "Begin My Journey"}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LeadFormDialog;
