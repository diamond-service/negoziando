export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);

  useEffect(() => {
    const { data: listener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user || null);

        if (session?.user) {
          const { data, error } = await supabase
            .from("profiles")
            .select("ruolo")
            .eq("id", session.user.id)
            .single();

          if (data) {
            setRole(data.ruolo);
          }
        }
      }
    );

    supabase.auth.getUser().then(async ({ data: { user } }) => {
      setUser(user);

      if (user) {
        const { data, error } = await supabase
          .from("profiles")
          .select("ruolo")
          .eq("id", user.id)
          .single();

        if (data) {
          setRole(data.ruolo);
        }
      }
    });

    return () => {
      listener?.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, role }}>
      {children}
    </AuthContext.Provider>
  );
}
