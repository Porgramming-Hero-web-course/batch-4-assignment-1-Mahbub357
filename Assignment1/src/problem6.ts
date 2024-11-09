{

    interface Profile {

        name: string;
    
        age: number;
    
        email: string;
    }
    
    function updateProfile1(profile: Profile, updates: Partial<Profile>): Profile {
    
       
        return { ...profile, ...updates };
    }
    
    const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
    
    console.log(updateProfile1(myProfile, { age: 26 }));
}