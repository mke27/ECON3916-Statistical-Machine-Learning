# Clustering World Economies with K-Means & PCA

## Objective
Apply unsupervised machine learning to identify natural groupings among world economies using World Bank development indicators, and evaluate how algorithmically derived clusters align with official income classifications.

## Methodology
- Pulled 10 World Bank development indicators (GDP per capita, life expectancy, infant mortality, primary enrollment, Gini index, internet access, trade openness, unemployment, and urbanization) for ~160 countries via the `wbgapi` API
- Standardized all features using `StandardScaler` to ensure equal contribution to the Euclidean distance metric used by K-Means
- Fit K-Means clustering with K=4 — matching the World Bank's four income tiers (Low, Lower-Middle, Upper-Middle, High) — using `k-means++` initialization for stable convergence
- Reduced the 10-dimensional feature space to 2 principal components via PCA for interpretable visual inspection of cluster structure
- Ran elbow method (WCSS) and silhouette analysis across K=2 through K=10 to empirically validate the choice of K
- Cross-tabulated algorithmic cluster assignments against World Bank income group classifications to quantify alignment between data-driven and expert-driven groupings
- Extended the full pipeline to California Housing census tract data, clustering tracts by demographic and housing features and assigning economically meaningful labels

## Key Findings
- *[Fill in: what K did the silhouette score suggest was optimal?]*
- *[Fill in: how closely did K=4 clusters map to World Bank income groups? Which groups were cleanest / most mixed?]*
- *[Fill in: what did the California Housing clusters reveal about geographic or economic segmentation?]*

## Tools & Libraries
`Python` · `wbgapi` · `scikit-learn` · `pandas` · `numpy` · `matplotlib` · `seaborn`