import { createClient } from '@supabase/supabase-js';
import React from "react";

// Inserisci qui i tuoi dati
const supabaseUrl = 'https://jcwldvnhloqeyjyosuzp.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impjd2xkdm5obG9xZXlqeW9zdXpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU1OTE1MjcsImV4cCI6MjA2MTE2NzUyN30.0AXfmPo_Dgn2CEmaBnnBUbhusrPADhtpXZ6X0WzhnEw';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
