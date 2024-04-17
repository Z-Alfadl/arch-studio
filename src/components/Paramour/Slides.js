export const Slides = ({ slides, currentSlide, handleClick }) => {
  return (
    <div className="slide-bar" role="toolbar" aria-label="slideshow">
        {slides.map((slide, index) => {
            return (
            <button
                key={index}
                type="button"
                className={`${currentSlide.id === index ? `active`: ``}`}
                value={index+1}
                onClick={handleClick}
            >{index+1}</button>
            );
        })}
    </div>
  );
};
