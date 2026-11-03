function CourseCard({ course, onSelect, onToggleFavorite, isFavorite }) {
  const thumbnail = `https://img.youtube.com/vi/${course.videoId}/hqdefault.jpg`;

  return (
    <div className="course-card">
      <button
        type="button"
        className="course-open"
        onClick={() => onSelect(course)}
      >
        <img
          src={thumbnail}
          alt={`Capa da aula ${course.title}`}
        />

        <div className="course-info">
          <h3>{course.title}</h3>
          <p>{course.description}</p>
        </div>
      </button>

      <button
        type="button"
        className="favorite-button"
        onClick={() => onToggleFavorite(course.id)}
        aria-pressed={isFavorite}
      >
        {isFavorite ? "★ Favoritado" : "☆ Favoritar"}
      </button>
    </div>

    
  );
}

export default CourseCard;