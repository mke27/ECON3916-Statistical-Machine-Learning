## **The Architecture of Dimensionality: Hedonic Pricing & the FWL Theorem**

### **Objective**
To implement a multivariate hedonic pricing model and empirically validate the Frisch–Waugh–Lovell (FWL) theorem by demonstrating how linear regression isolates causal effects through residualization.

---

### **Methodology**
- Estimated a baseline multivariate OLS regression modeling `Sale_Price` as a function of `Property_Age` and `Distance_to_Tech_Hub` to capture joint effects within a hedonic pricing framework.  
- Constructed a misspecified (restricted) model omitting proximity to tech hubs to diagnose omitted variable bias (OVB).  
- Applied the Frisch–Waugh–Lovell (FWL) theorem by:
  - Regressing `Property_Age` on `Distance_to_Tech_Hub` to extract residualized age (orthogonal to location effects).  
  - Regressing `Sale_Price` on `Distance_to_Tech_Hub` to isolate residual variation in prices net of location.  
  - Regressing the residualized outcome on the residualized predictor to recover the partial effect.  
- Verified that the coefficient obtained via residual-on-residual regression exactly matches the corresponding coefficient from the full multivariate OLS model, confirming the algebraic equivalence.  

---

### **Key Findings**
- The restricted model exhibited **severe omitted variable bias**, where the exclusion of `Distance_to_Tech_Hub` led to an upwardly biased estimate of the effect of `Property_Age`, falsely attributing location-driven price variation to structural housing characteristics.  
- Residualization via the FWL procedure effectively removed shared covariance between regressors, isolating the independent variation in `Property_Age`.  
- The exact numerical equivalence between the FWL-derived coefficient and the multivariate OLS estimate provides a concrete, computational proof of *ceteris paribus* in linear models.  
- This demonstrates that OLS is not merely fitting correlations, but algorithmically decomposing variation into orthogonal components, ensuring that each coefficient reflects a conditional (partial) relationship.
