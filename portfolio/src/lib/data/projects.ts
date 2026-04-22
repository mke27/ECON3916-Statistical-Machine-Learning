import { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    title: "Tree-Based Models: Random Forest vs. OLS",
    description:
      "Compared Decision Tree, Ridge, and Random Forest on 20,640 California housing observations. RF achieved R² = 0.83, beating Ridge by 24 points. Extracted MDI and permutation feature importance.",
    tags: ["Python", "scikit-learn", "matplotlib"],
    githubUrl: "#",
    // image: "/rf-model.png",
  },
  {
    title: "NLP: Sentiment in FOMC Minutes",
    description:
      "Built a TF-IDF pipeline to analyze Federal Reserve meeting minutes. Classified hawkish vs. dovish language with 87% accuracy using logistic regression.",
    tags: ["Python", "scikit-learn", "NLTK", "Plotly"],
    githubUrl: "#",
    // image: "/fomc-nlp.png",
  },
  {
    title: "Time Series: CPI with Prophet",
    description:
      "Forecasted CPI inflation using Prophet and ARIMA. Prophet captured the COVID structural break that ARIMA missed. MASE = 0.72 (beats naive benchmark).",
    tags: ["Python", "Prophet", "statsmodels", "pandas"],
    githubUrl: "#",
    // image: "/cpi-prophet.png",
  },
];
