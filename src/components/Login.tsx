import { useState } from "react";
import { supabase } from "../lib/supabase";

export function Login() {

    const [email, setEmail] = useState('')

    
    return (
        <div>
            <form>
                <input type="email" name="email" id="" placeholder="example@example.com" onChange={e => setEmail(e.target.value)}/>
                <button onClick={handleSubmit}>Send</button>
            </form>

        </div>


    )
}