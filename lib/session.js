// this file is a wrapper with defaults to be used in both API routes and `getServerSideProps` functions
export const sessionOptions = {
  password: process.env.SESSION_SECRET,
  cookieName: "MDC_SESSION",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};
