const DrinksLayout = ({ children }) => {
  return (
    <div>
      <div className="mockup-code mb-8">
        <code>
          <pre data-prefix="$">npx create-next-app@latest cocktails-list</pre>
        </code>
      </div>
      {children}
    </div>
  );
};

export default DrinksLayout;
