function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-blue-950 text-white p-4 text-center fixed bottom-0 w-full">
      <p>© {year} Property of A.F.P. All rights reserved.</p>
      <p>
        Terms of Service | 
        Privacy Policy
      </p>
    </footer>
  )
}
export default Footer