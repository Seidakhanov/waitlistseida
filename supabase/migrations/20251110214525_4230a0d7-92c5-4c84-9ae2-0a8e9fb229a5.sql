-- Create table for finance practicum leads
CREATE TABLE public.finance_practicum_leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.finance_practicum_leads ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert leads (no authentication required for lead capture)
CREATE POLICY "Anyone can create leads"
ON public.finance_practicum_leads
FOR INSERT
WITH CHECK (true);

-- Only authenticated users can view leads (for admin purposes)
CREATE POLICY "Authenticated users can view leads"
ON public.finance_practicum_leads
FOR SELECT
USING (auth.role() = 'authenticated');

-- Add index for better query performance
CREATE INDEX idx_finance_practicum_leads_created_at ON public.finance_practicum_leads(created_at DESC);