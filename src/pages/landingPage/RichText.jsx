function RichText({ children }) {
  return (
    <section id="rich-text " className="py-8">
      <div className="content mx-auto max-w-3xl px-5 text-center md:px-8">
        {children}
      </div>
    </section>
  );
}

export default RichText;
