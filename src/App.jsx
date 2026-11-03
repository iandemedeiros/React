
import { useState } from "react";

import Header from "./components/Header";
import CourseSection from "./components/CourseSection";
import CourseCard from "./components/CourseCard";
import VideoPlayer from "./components/VideoPlayer";

import { categories } from "./data/courses";
import "./App.css";

function App() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState([]);

  function handleSelectCourse(course) {
    setSelectedCourse(course);
  }

  function handleCloseVideo() {
    setSelectedCourse(null);
  }

  function handleToggleFavorite(courseId) {
    setFavorites((previous) =>
      previous.includes(courseId)
        ? previous.filter((id) => id !== courseId)
        : [...previous, courseId]
    );
  }

  const filteredCategories = categories
    .map((category) => ({
      ...category,
      courses: category.courses.filter((course) =>
        course.title
          .toLowerCase()
          .includes(search.toLowerCase().trim())
      )
    }))
    .filter((category) => category.courses.length > 0);

  const favoriteCourses = categories
    .flatMap((category) => category.courses)
    .filter((course) => favorites.includes(course.id));

  return (
    <>
      <Header categories={categories} />

      <main id="home">
        <section className="hero">
          <h1>Bem-vindo ao DevFlix</h1>
          <p>Aprenda programação com aulas gratuitas.</p>

          <input
            className="search-input"
            type="search"
            placeholder="Pesquisar aulas..."
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
          />
        </section>

        {filteredCategories.map((category) => (
          <CourseSection
            key={category.id}
            category={category}
            onSelect={handleSelectCourse}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
          />
        ))}

        {filteredCategories.length === 0 && (
          <p className="empty-message">
            Nenhuma aula encontrada.
          </p>
        )}

        <section id="favoritos" className="course-section">
          <h2>Meus Favoritos</h2>

          {favoriteCourses.length === 0 ? (
            <p>Você ainda não favoritou nenhuma aula.</p>
          ) : (
            <div className="course-grid">
              {favoriteCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  onSelect={handleSelectCourse}
                  isFavorite={true}
                  onToggleFavorite={handleToggleFavorite}
                />
              ))}
            </div>
          )}
        </section>
      </main>

      <VideoPlayer
        course={selectedCourse}
        onClose={handleCloseVideo}
      />
    </>
  );
}

export default App;
