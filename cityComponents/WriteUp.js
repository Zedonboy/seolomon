export default function WriteUp(props) {
  return (
    <div className="terms-of-service-area ptb-100">
      <div className="container">
        <div className="terms-of-service-content" dangerouslySetInnerHTML={{
          __html: props?.content
        }}>
         
        </div>
      </div>
    </div>
  );
}
