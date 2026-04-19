# FedSpeak Analysis — NLP on FOMC Minutes
 
## Objective
Apply natural language processing to 20+ years of Federal Reserve meeting minutes to quantify sentiment shifts, measure policy uncertainty, and identify distinct language regimes in central bank communication.
 
## Methodology
- Loaded FOMC meeting minutes from the HuggingFace `vtasca/fomc-statements-minutes` dataset and filtered to full meeting minutes (excluding shorter policy statements)
- Preprocessed text via lowercasing, non-alphabetic character removal, stop word filtering, and WordNet lemmatization using `nltk`
- Constructed a TF-IDF document-term matrix (unigrams + bigrams, `min_df=5`, `max_df=0.85`, `max_features=5000`) to represent each meeting as a numerical vector
- Computed Loughran-McDonald sentiment scores — net sentiment `(positive − negative) / total` and an uncertainty ratio — using a domain-appropriate financial dictionary rather than a general-purpose one
- Visualized net sentiment and uncertainty as time series with 12-month rolling averages, annotated with key macro events (Lehman collapse, taper tantrum, COVID-19, 2022 tightening cycle)
- Applied TruncatedSVD (50 components) to reduce the sparse TF-IDF matrix, then fit K-Means (K=3) to identify distinct language regimes across the FOMC's communication history
- Compared pre-COVID and post-COVID sentiment distributions using overlaid kernel density plots to quantify the structural shift in Fed language
