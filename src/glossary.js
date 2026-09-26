export const glossaryTerms = [
  {abbr:'AI', full:'Artificial intelligence', meaning:'Computer systems used to perform tasks that normally require human judgement, pattern recognition, language or prediction.'},
  {abbr:'POC', full:'Proof of concept', meaning:'An early test showing whether an idea or method can work. It is not a production-ready system.'},
  {abbr:'MVP', full:'Minimum viable product', meaning:'The earliest usable version of a product built to test whether it is useful before adding more features.'},
  {abbr:'OTPM', full:'Occupational Transition Pressure Model', meaning:'Tests whether AI exposure and observed use are accompanied by unusual labour-market deterioration.'},
  {abbr:'PEXM', full:'Population Exposure Model', meaning:'Shows which population groups are concentrated in occupational pathways under pressure, while keeping groups separate rather than treating them as one category.'},
  {abbr:'VACM', full:'Vulnerability and Adaptive Capacity Model', meaning:'Assesses how well households can absorb an income shock and adapt to a labour-market transition.'},
  {abbr:'PBGM', full:'Policy Buffer and Protection Gap Model', meaning:'Measures how much protection existing programmes provide and where eligibility, timing or coverage gaps remain.'},
  {abbr:'TVPM', full:'Transition Velocity and Protected Transition Margin Model', meaning:'Compares the time available for a worker to transition with the time a sustainable transition is expected to require.'},
  {abbr:'PTM', full:'Protected Transition Margin', meaning:'The amount of protected time available compared with the time needed for a sustainable employment transition.'},
  {abbr:'TTP', full:'Timely Transition Probability', meaning:'The estimated probability that a transition can be completed within the available warning and protection window.'},
  {abbr:'C-AIOE', full:'Complementarity-Adjusted Artificial Intelligence Occupational Exposure', meaning:'A Canadian occupational exposure framework that considers both potential AI exposure and how complementary AI may be to the occupation.'},
  {abbr:'HEHC', full:'High exposure, high complementarity', meaning:'Occupations with high potential AI exposure where AI is assessed as relatively complementary to human work.'},
  {abbr:'HELC', full:'High exposure, low complementarity', meaning:'Occupations with high potential AI exposure where AI is assessed as less complementary to human work.'},
  {abbr:'LE', full:'Low exposure', meaning:'Occupations assessed as having relatively low potential AI exposure.'},
  {abbr:'NPR', full:'Non-permanent resident', meaning:'A person in Canada with temporary resident status or a refugee protection claim, depending on the statistical definition used.'},
  {abbr:'EI', full:'Employment Insurance', meaning:'Canada\'s federal programme providing temporary income support to eligible workers in qualifying circumstances.'},
  {abbr:'SFS', full:'Survey of Financial Security', meaning:'Statistics Canada survey covering household assets, debts, income and financial position.'},
  {abbr:'SHS', full:'Survey of Household Spending', meaning:'Statistics Canada survey covering household spending patterns.'},
  {abbr:'MBM', full:'Market Basket Measure', meaning:'Canada\'s official poverty line, based on the cost of a specified basket of goods and services.'},
  {abbr:'PUMF', full:'Public Use Microdata File', meaning:'A privacy-protected microdata file made available for public statistical analysis.'},
  {abbr:'TEER', full:'Training, Education, Experience and Responsibilities', meaning:'A National Occupational Classification category describing typical training, education, experience and responsibility requirements.'},
  {abbr:'NOC', full:'National Occupational Classification', meaning:'Canada\'s standard system for classifying occupations.'},
  {abbr:'LFS', full:'Labour Force Survey', meaning:'Statistics Canada\'s main monthly household survey of employment and unemployment.'},
  {abbr:'CIS', full:'Canadian Income Survey', meaning:'Statistics Canada survey used to measure income and related household economic conditions.'},
  {abbr:'TFSA', full:'Tax-Free Savings Account', meaning:'A Canadian registered account in which eligible investment income and withdrawals are generally tax-free.'},
  {abbr:'RMSE', full:'Root Mean Squared Error', meaning:'A forecasting error measure that gives relatively more weight to larger errors.'},
  {abbr:'MAE', full:'Mean Absolute Error', meaning:'A forecasting error measure equal to the average absolute difference between predictions and observed values.'},
  {abbr:'ADR', full:'Architecture Decision Record', meaning:'A short record explaining an important technical or design decision and why it was made.'},
  {abbr:'EU-LFS', full:'European Union Labour Force Survey', meaning:'The European Union labour-force survey framework used for employment and unemployment statistics.'},
  {abbr:'BLS', full:'Bureau of Labor Statistics', meaning:'The United States federal statistical agency for labour-market and price data.'},
  {abbr:'CPS', full:'Current Population Survey', meaning:'A major United States household survey used for labour-force statistics.'},
  {abbr:'GCC', full:'Gulf Cooperation Council', meaning:'The regional organization comprising Bahrain, Kuwait, Oman, Qatar, Saudi Arabia and the United Arab Emirates.'},
  {abbr:'API', full:'Application Programming Interface', meaning:'A structured way for software to request or exchange data.'},
  {abbr:'JSON', full:'JavaScript Object Notation', meaning:'A structured text format used to exchange and download data.'},
  {abbr:'COVID-19', full:'Coronavirus disease 2019', meaning:'The infectious disease and associated pandemic used here as a historical labour-market shock and negative-control period.'}
];

export const glossaryMap = Object.fromEntries(glossaryTerms.map(x=>[x.abbr,x]));

const escapeAttr = value => String(value).replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

const escapeRegex = value => value.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
const pattern = new RegExp(
  '\\b(' + [...glossaryTerms].sort((a,b)=>b.abbr.length-a.abbr.length).map(x=>escapeRegex(x.abbr)).join('|') + ')\\b',
  'g'
);

export function termsInText(value) {
  const text=String(value ?? '');
  return glossaryTerms.filter(item=>new RegExp('\\b'+escapeRegex(item.abbr)+'\\b').test(text));
}

export function annotateAcronyms(html) {
  return String(html).split(/(<[^>]+>)/g).map(part=>{
    if (part.startsWith('<')) return part;
    return part.replace(pattern, token=>{
      const item=glossaryMap[token];
      if (!item) return token;
      const full=escapeAttr(item.full);
      return '<abbr class="term" title="' + full + '" aria-label="' + full + ' (' + escapeAttr(token) + ')">' + escapeAttr(token) + '</abbr>';
    });
  }).join('');
}
