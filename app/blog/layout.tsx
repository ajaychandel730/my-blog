import CreateNavbar from "../components/blogs/CreateNavbar";


export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* <StoreProvider> */}
        {children}
      {/* </StoreProvider> */}
    </>
  );
}
