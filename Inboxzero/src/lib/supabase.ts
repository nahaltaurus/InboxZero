import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tbhbwndqncsfnznsyvao.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRiaGJ3bmRxbmNzZm56bnN5dmFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIzMzYyMDksImV4cCI6MjA0NzkxMjIwOX0.s330llQ8Bk6v2Z6E3uB2q4Wv4Nbi4rgjenbFy61wWuo';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);