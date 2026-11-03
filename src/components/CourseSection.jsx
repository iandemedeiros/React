
import CourseCard from "./CourseCard";

function CourseSection({
  category,
  onSelect,
  favorites,
  onToggleFavorite
}) {
  return (
    <section
      id={category.id}
      className="course-section"
    >
      <h2>{category.title}</h2>

      <div className="course-grid">
        {category.courses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            onSelect={onSelect}
            isFavorite={favorites.includes(course.id)}
            onToggleFavorite={onToggleFavorite}
          />
        ))}
      </div>
    </section>
  );
}

export default CourseSection;
