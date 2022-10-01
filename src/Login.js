import React from "react";



function Login(){

return(
  <div>
    <h3>LOGIN</h3>
    <form>
<div>
<input name="username" type="text" placeholder="Input your usename"  />
  
</div>

<div>
<input name="password" type="password" placeholder="Enter yout "  />
</div>
<input type="submit" value="submit" />

    </form>
  </div>
);

}
export default Login;