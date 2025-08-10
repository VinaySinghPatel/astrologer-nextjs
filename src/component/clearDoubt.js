"use client"; 

import React, { useState } from "react";
import { FaSearch, FaFilter, FaChevronDown } from "react-icons/fa";
import styles from "./ClearDoubt.module.css"; // moved styles to a CSS module

const ClearDoubt = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("All Subjects");
  const [selectedGrade, setSelectedGrade] = useState("All Grades");
  const [showSubjectDropdown, setShowSubjectDropdown] = useState(false);
  const [showGradeDropdown, setShowGradeDropdown] = useState(false);

  const subjects = [
    "All Subjects",
    "Vedic Astrology",
    "Numerology",
    "Palm Reading",
    "Tarot Reading",
    "Vastu Shastra",
    "Gemology",
    "Face Reading",
  ];

  const grades = [
    "All Grades",
    "Beginner",
    "Intermediate",
    "Advanced",
    "Expert",
  ];

  return (
    <section className={`${styles.clearDoubtSection} section-padding bg-white`}>
      <div className="container-custom">
        <div className={styles.searchHeader} data-aos="fade-up">
          <h2 className={styles.searchTitle}>
            Clear Your Doubt - Connect to Guru
          </h2>
          <p className={styles.searchSubtitle}>
            Find the perfect astrologer for your questions and get instant
            guidance
          </p>
        </div>

        <div
          className={styles.searchContainer}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className={styles.searchBox}>
            <div className={styles.searchInputWrapper}>
              <FaSearch className={styles.searchIcon} />
              <input
                type="text"
                placeholder="Ask your question or search for guidance..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={styles.searchInput}
              />
            </div>

            <div className={styles.filtersWrapper}>
              {/* Subject Filter */}
              <div className={styles.filterDropdown}>
                <button
                  className={styles.filterBtn}
                  onClick={() => {
                    setShowSubjectDropdown(!showSubjectDropdown);
                    setShowGradeDropdown(false);
                  }}
                >
                  <FaFilter className={styles.filterIcon} />
                  {selectedSubject}
                  <FaChevronDown className={styles.chevronIcon} />
                </button>

                {showSubjectDropdown && (
                  <div className={styles.dropdownMenu}>
                    {subjects.map((subject) => (
                      <div
                        key={subject}
                        className={`${styles.dropdownItem} ${
                          selectedSubject === subject ? styles.active : ""
                        }`}
                        onClick={() => {
                          setSelectedSubject(subject);
                          setShowSubjectDropdown(false);
                        }}
                      >
                        {subject}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Grade Filter */}
              <div className={styles.filterDropdown}>
                <button
                  className={styles.filterBtn}
                  onClick={() => {
                    setShowGradeDropdown(!showGradeDropdown);
                    setShowSubjectDropdown(false);
                  }}
                >
                  <FaFilter className={styles.filterIcon} />
                  {selectedGrade}
                  <FaChevronDown className={styles.chevronIcon} />
                </button>

                {showGradeDropdown && (
                  <div className={styles.dropdownMenu}>
                    {grades.map((grade) => (
                      <div
                        key={grade}
                        className={`${styles.dropdownItem} ${
                          selectedGrade === grade ? styles.active : ""
                        }`}
                        onClick={() => {
                          setSelectedGrade(grade);
                          setShowGradeDropdown(false);
                        }}
                      >
                        {grade}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <button className={styles.searchButton}>
              <FaSearch />
              Search
            </button>
          </div>
        </div>

        <div
          className={styles.quickSuggestions}
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <span className={styles.suggestionsLabel}>Popular Questions:</span>
          <div className={styles.suggestionsTags}>
            <span className={styles.suggestionTag}>Career Guidance</span>
            <span className={styles.suggestionTag}>Marriage Compatibility</span>
            <span className={styles.suggestionTag}>Health Predictions</span>
            <span className={styles.suggestionTag}>Business Success</span>
            <span className={styles.suggestionTag}>Lucky Numbers</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClearDoubt;
