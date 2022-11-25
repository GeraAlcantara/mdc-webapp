// this file is a wrapper with defaults to be used in both API routes and `getServerSideProps` functions
export const sessionOptions = {
  cookieName: "MDC_SESSION",
  password: process.env.SESSION_SECRET,
};
