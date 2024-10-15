const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-4 mt-10">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Meu App. Todos os direitos reservados.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  