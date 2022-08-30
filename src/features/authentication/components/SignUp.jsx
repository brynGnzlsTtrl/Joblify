import React from "react";

export default function SignUp({ className }) {
  return (
    <div className={className}>
      <h1>Log in</h1>
      <form className="sign-in-form">
        <Input type="email" name="Email" />
        <Input type="password" name="Password" />
        <div className="sign-in-form__sub-input sub-input">
          <div className="remember-user">
            <input type="checkbox" name="remember-user" id="remember-user" />
            <label for="remember-user">Remember User</label>
          </div>
          <a href="#" className="forgot-password">Forgot Password</a>
        </div>
      </form>
      <button class="sign-up__button" type="submit">
        Sign in
      </button>

      <div className="sign-up__or">
        <hr />
        <span>OR</span>
        <hr />
      </div>
      <div className="sign-up__log-alt-cont">
      <LogAlternative platform="Google">
        <svg
          className="log-Alternative__icon"
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 10.4477C20 9.75865 19.9333 9.04734 19.8222 8.38049H10.1973V12.3149H15.7099C15.4876 13.5819 14.7541 14.6934 13.6649 15.4047L16.9547 17.9609C18.8886 16.1604 20 13.5375 20 10.4477Z"
            fill="#4280EF"
          />
          <path
            d="M10.1973 20.4061C12.9536 20.4061 15.2654 19.4948 16.9547 17.9388L13.6649 15.4048C12.7535 16.0272 11.5754 16.3828 10.1973 16.3828C7.52987 16.3828 5.2848 14.5823 4.46235 12.1816L1.08363 14.7824C2.81745 18.2278 6.32954 20.4061 10.1973 20.4061Z"
            fill="#34A353"
          />
          <path
            d="M4.46235 12.1593C4.04001 10.8923 4.04001 9.51411 4.46235 8.24709L1.08363 5.62415C-0.361211 8.51384 -0.361211 11.9148 1.08363 14.7822L4.46235 12.1593Z"
            fill="#F6B704"
          />
          <path
            d="M10.1973 4.04595C11.6421 4.02373 13.0647 4.57944 14.1095 5.57971L17.0214 2.64557C15.1764 0.911752 12.7313 -0.0218404 10.1973 0.000387949C6.32953 0.000387949 2.81745 2.17877 1.08363 5.62417L4.46235 8.24712C5.2848 5.82422 7.52987 4.04595 10.1973 4.04595Z"
            fill="#E54335"
          />
        </svg>
      </LogAlternative>
      <LogAlternative platform="Apple">
        <svg
          className="log-alternative__icon"
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.5725 4.54125C13.9033 4.15999 14.1555 3.71715 14.3147 3.23814C14.4739 2.75914 14.5368 2.25341 14.5 1.75C13.4845 1.83198 12.5418 2.30961 11.875 3.08C11.5557 3.44923 11.3138 3.87877 11.1635 4.34319C11.0132 4.80761 10.9576 5.29746 11 5.78375C11.4954 5.78788 11.9851 5.67796 12.4312 5.4625C12.8772 5.24704 13.2678 4.93183 13.5725 4.54125V4.54125ZM15.7775 11.0513C15.7834 10.3808 15.96 9.72284 16.2907 9.13955C16.6214 8.55626 17.0952 8.06685 17.6675 7.7175C17.3063 7.19708 16.8289 6.76798 16.273 6.46422C15.7171 6.16045 15.0981 5.99038 14.465 5.9675C13.1 5.8275 11.84 6.76375 11.1138 6.76375C10.3875 6.76375 9.36376 5.985 8.22626 6.0025C7.48263 6.027 6.75803 6.24381 6.12316 6.63179C5.48828 7.01977 4.9648 7.56567 4.60376 8.21625C3.06376 10.8938 4.21001 14.875 5.75001 17.0362C6.45001 18.095 7.32501 19.2938 8.48001 19.25C9.63501 19.2062 10.0113 18.5325 11.35 18.5325C12.6888 18.5325 13.1 19.25 14.2375 19.2237C15.375 19.1975 16.18 18.1388 16.915 17.08C17.4357 16.3113 17.8424 15.4714 18.1225 14.5863C17.4291 14.2905 16.8374 13.7981 16.4207 13.1699C16.0039 12.5417 15.7803 11.8051 15.7775 11.0513V11.0513Z"
            fill="black"
          />
        </svg>
      </LogAlternative>
      </div>
      
    </div>
  );
}

function LogAlternative({ platform, children }) {
  return (
    <div className="sign-up__log-alternative log-alternative">
      {children}
      <p className="log-alternative__context">Continue with {platform}</p>
    </div>
  );
}

function Input({ type, name }) {
  return (
    <div className="sign-input sign-up__sign-input">
      <label>{name}</label>
      <div className="sign-input__input-cont">
        <span class="input-cont__placeholder">{name}</span>
        <input type={type} name={type} id={type} />
      </div>
    </div>
  );
}
