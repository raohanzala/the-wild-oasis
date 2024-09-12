
import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://gyblmpwzbgkfxjmatrar.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd5YmxtcHd6YmdrZnhqbWF0cmFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUzNDI3MTIsImV4cCI6MjA0MDkxODcxMn0.Kww81r-0860GKYGqIbMNt-2NheoUUxrcUDPr1tfqdlk'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase