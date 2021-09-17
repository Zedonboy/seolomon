interface IRichContentSection {
  cover: any;
  content: string;
}
export default function RichContentSection(props: {
  data: IRichContentSection;
}) {
  return (
    <div className="blog-details-area bg-f9f9f9 ptb-100">
      <div className="container">
        <div className="row flex justify-center">
          <div className="col-lg-8 col-md-12">
            <div className="blog-details-desc">
              <div className="article-image">
                <img src={props?.data?.cover?.url} alt="image" />
              </div>

              <div
                dangerouslySetInnerHTML={{ __html: props?.data?.content}}
                className="article-content"
              >
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
