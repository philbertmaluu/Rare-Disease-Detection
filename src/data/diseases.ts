import { Disease } from '../types';

export const diseases: Disease[] = [
  {
    id: 'disease_001',
    name: 'Huntington\'s Disease',
    description: 'A progressive neurodegenerative disorder affecting movement, cognition, and emotional state.',
    symptoms: ['neuro_003', 'neuro_004', 'neuro_005', 'neuro_007', 'neuro_010', 'musculo_001', 'general_004'],
    prevalence: '3-7 per 100,000',
    rarity: 'rare',
    geneticMarkers: ['HTT gene mutation', 'CAG repeat expansion'],
    ageGroup: ['30-50', '50+'],
    moreInfo: 'Huntington\'s disease is caused by a mutation in the HTT gene. It typically manifests in mid-life and progresses over 15-20 years.'
  },
  {
    id: 'disease_002',
    name: 'Duchenne Muscular Dystrophy',
    description: 'A genetic disorder characterized by progressive muscle degeneration and weakness.',
    symptoms: ['neuro_004', 'musculo_005', 'musculo_007', 'cardio_003', 'resp_003'],
    prevalence: '1 in 3,500-5,000 boys',
    rarity: 'rare',
    geneticMarkers: ['DMD gene mutation', 'Dystrophin deficiency'],
    ageGroup: ['0-5', '6-12'],
    moreInfo: 'DMD primarily affects boys and is caused by mutations in the DMD gene. Symptoms typically appear in early childhood.'
  },
  {
    id: 'disease_003',
    name: 'Fabry Disease',
    description: 'A rare genetic disorder affecting the breakdown of fatty substances in cells.',
    symptoms: ['dermato_001', 'neuro_001', 'gi_002', 'cardio_001', 'renal_001', 'renal_002'],
    prevalence: '1 in 40,000-117,000',
    rarity: 'rare',
    geneticMarkers: ['GLA gene mutation', 'Alpha-galactosidase A deficiency'],
    ageGroup: ['13-18', '19-29', '30-50'],
    moreInfo: 'Fabry disease is X-linked and caused by mutations in the GLA gene, leading to accumulation of globotriaosylceramide.'
  },
  {
    id: 'disease_004',
    name: 'Wilson\'s Disease',
    description: 'A rare inherited disorder causing copper to accumulate in vital organs.',
    symptoms: ['neuro_005', 'neuro_006', 'gi_001', 'gi_003', 'dermato_002', 'general_001'],
    prevalence: '1 in 30,000',
    rarity: 'rare',
    geneticMarkers: ['ATP7B gene mutation', 'Copper transport defect'],
    ageGroup: ['6-12', '13-18', '19-29'],
    moreInfo: 'Wilson\'s disease affects copper metabolism and can cause liver disease, neurological problems, and psychiatric symptoms.'
  },
  {
    id: 'disease_005',
    name: 'Gaucher Disease',
    description: 'A genetic disorder affecting the breakdown of fatty substances.',
    symptoms: ['endo_001', 'gi_004', 'hemato_001', 'hemato_004', 'musculo_003', 'cardio_005'],
    prevalence: '1 in 50,000-100,000',
    rarity: 'rare',
    geneticMarkers: ['GBA gene mutation', 'Glucocerebrosidase deficiency'],
    ageGroup: ['0-5', '6-12', '13-18', '19-29'],
    moreInfo: 'Gaucher disease is caused by mutations in the GBA gene and has three main types with varying severity.'
  },
  {
    id: 'disease_006',
    name: 'Marfan Syndrome',
    description: 'A connective tissue disorder affecting the heart, blood vessels, bones, and joints.',
    symptoms: ['cardio_001', 'cardio_002', 'musculo_001', 'musculo_006', 'ophthal_002', 'neuro_008'],
    prevalence: '1 in 5,000',
    rarity: 'rare',
    geneticMarkers: ['FBN1 gene mutation', 'Fibrillin-1 defect'],
    ageGroup: ['0-5', '6-12', '13-18', '19-29'],
    moreInfo: 'Marfan syndrome affects connective tissue and can cause life-threatening cardiovascular complications.'
  },
  {
    id: 'disease_007',
    name: 'Pompe Disease',
    description: 'A rare genetic disorder affecting muscle function due to glycogen buildup.',
    symptoms: ['neuro_004', 'resp_003', 'cardio_003', 'musculo_005', 'endo_001'],
    prevalence: '1 in 40,000',
    rarity: 'rare',
    geneticMarkers: ['GAA gene mutation', 'Alpha-glucosidase deficiency'],
    ageGroup: ['0-5', '6-12', '13-18', '30-50'],
    moreInfo: 'Pompe disease has infantile and late-onset forms, both caused by GAA gene mutations affecting glycogen breakdown.'
  },
  {
    id: 'disease_008',
    name: 'Sickle Cell Disease',
    description: 'A genetic blood disorder causing misshapen red blood cells.',
    symptoms: ['hemato_003', 'musculo_003', 'gi_002', 'resp_006', 'general_001', 'endo_001'],
    prevalence: '1 in 365 African Americans',
    rarity: 'rare',
    geneticMarkers: ['HBB gene mutation', 'Hemoglobin S'],
    ageGroup: ['0-5', '6-12', '13-18', '19-29'],
    moreInfo: 'Sickle cell disease is caused by a mutation in the HBB gene and affects hemoglobin structure.'
  },
  {
    id: 'disease_009',
    name: 'Cystic Fibrosis',
    description: 'A genetic disorder affecting the lungs and digestive system.',
    symptoms: ['resp_001', 'resp_003', 'resp_005', 'gi_001', 'gi_005', 'gi_004'],
    prevalence: '1 in 2,500-3,500',
    rarity: 'rare',
    geneticMarkers: ['CFTR gene mutation', 'Chloride channel defect'],
    ageGroup: ['0-5', '6-12', '13-18', '19-29'],
    moreInfo: 'Cystic fibrosis is caused by mutations in the CFTR gene affecting chloride transport in cells.'
  },
  {
    id: 'disease_010',
    name: 'Tay-Sachs Disease',
    description: 'A fatal genetic disorder affecting nerve cells in the brain and spinal cord.',
    symptoms: ['neuro_003', 'neuro_004', 'neuro_008', 'neuro_009', 'neuro_010', 'general_004'],
    prevalence: '1 in 320,000',
    rarity: 'ultra-rare',
    geneticMarkers: ['HEXA gene mutation', 'Beta-hexosaminidase A deficiency'],
    ageGroup: ['0-5'],
    moreInfo: 'Tay-Sachs disease is caused by HEXA gene mutations and primarily affects infants of Ashkenazi Jewish descent.'
  },
  {
    id: 'disease_011',
    name: 'Niemann-Pick Disease',
    description: 'A group of inherited metabolic disorders affecting lipid storage.',
    symptoms: ['endo_001', 'neuro_010', 'hemato_004', 'resp_003', 'gi_004', 'dermato_002'],
    prevalence: '1 in 250,000',
    rarity: 'ultra-rare',
    geneticMarkers: ['SMPD1 gene mutation', 'Sphingomyelinase deficiency'],
    ageGroup: ['0-5', '6-12', '13-18'],
    moreInfo: 'Niemann-Pick disease has several types, all affecting lipid metabolism in cells.'
  },
  {
    id: 'disease_012',
    name: 'Ehlers-Danlos Syndrome',
    description: 'A group of disorders affecting connective tissues.',
    symptoms: ['musculo_001', 'musculo_006', 'dermato_003', 'dermato_001', 'cardio_002', 'gi_002'],
    prevalence: '1 in 5,000',
    rarity: 'rare',
    geneticMarkers: ['COL5A1 gene mutation', 'Collagen defect'],
    ageGroup: ['6-12', '13-18', '19-29', '30-50'],
    moreInfo: 'Ehlers-Danlos syndrome affects collagen production and can cause hypermobile joints and fragile skin.'
  },
  {
    id: 'disease_013',
    name: 'Prader-Willi Syndrome',
    description: 'A genetic disorder affecting development and causing insatiable appetite.',
    symptoms: ['endo_002', 'endo_004', 'neuro_004', 'endo_006', 'general_004', 'general_005'],
    prevalence: '1 in 15,000',
    rarity: 'rare',
    geneticMarkers: ['15q11-q13 deletion', 'Paternal chromosome 15'],
    ageGroup: ['0-5', '6-12', '13-18'],
    moreInfo: 'Prader-Willi syndrome is caused by loss of function of genes in chromosome 15.'
  },
  {
    id: 'disease_014',
    name: 'Rett Syndrome',
    description: 'A rare neurological disorder affecting brain development.',
    symptoms: ['neuro_007', 'neuro_010', 'neuro_003', 'musculo_004', 'general_004', 'resp_003'],
    prevalence: '1 in 10,000 females',
    rarity: 'rare',
    geneticMarkers: ['MECP2 gene mutation', 'X-linked'],
    ageGroup: ['0-5', '6-12'],
    moreInfo: 'Rett syndrome primarily affects girls and is caused by mutations in the MECP2 gene.'
  },
  {
    id: 'disease_015',
    name: 'Angelman Syndrome',
    description: 'A neuro-genetic disorder causing developmental delays and seizures.',
    symptoms: ['neuro_003', 'neuro_010', 'neuro_006', 'general_005', 'general_004', 'musculo_004'],
    prevalence: '1 in 12,000-20,000',
    rarity: 'rare',
    geneticMarkers: ['UBE3A gene mutation', 'Maternal chromosome 15'],
    ageGroup: ['0-5', '6-12', '13-18'],
    moreInfo: 'Angelman syndrome is caused by loss of function of the UBE3A gene on maternal chromosome 15.'
  },
  {
    id: 'disease_016',
    name: 'Spinal Muscular Atrophy',
    description: 'A genetic disorder affecting motor neurons and causing muscle weakness.',
    symptoms: ['neuro_004', 'musculo_005', 'resp_003', 'gi_005', 'musculo_007', 'endo_001'],
    prevalence: '1 in 10,000',
    rarity: 'rare',
    geneticMarkers: ['SMN1 gene mutation', 'Survival motor neuron protein'],
    ageGroup: ['0-5', '6-12', '13-18'],
    moreInfo: 'SMA is caused by mutations in the SMN1 gene and has four main types of varying severity.'
  },
  {
    id: 'disease_017',
    name: 'Fragile X Syndrome',
    description: 'A genetic disorder causing intellectual disability and behavioral challenges.',
    symptoms: ['neuro_010', 'general_005', 'neuro_007', 'dermato_004', 'general_004', 'neuro_002'],
    prevalence: '1 in 4,000 males, 1 in 8,000 females',
    rarity: 'rare',
    geneticMarkers: ['FMR1 gene mutation', 'CGG repeat expansion'],
    ageGroup: ['0-5', '6-12', '13-18'],
    moreInfo: 'Fragile X syndrome is caused by mutations in the FMR1 gene and is X-linked.'
  },
  {
    id: 'disease_018',
    name: 'Phenylketonuria (PKU)',
    description: 'A genetic disorder affecting the breakdown of the amino acid phenylalanine.',
    symptoms: ['neuro_010', 'dermato_002', 'dermato_004', 'general_005', 'neuro_003', 'endo_006'],
    prevalence: '1 in 10,000-15,000',
    rarity: 'rare',
    geneticMarkers: ['PAH gene mutation', 'Phenylalanine hydroxylase deficiency'],
    ageGroup: ['0-5', '6-12'],
    moreInfo: 'PKU is caused by mutations in the PAH gene and requires lifelong dietary management.'
  },
  {
    id: 'disease_019',
    name: 'Hereditary Angioedema',
    description: 'A rare genetic disorder causing episodes of swelling.',
    symptoms: ['dermato_001', 'resp_003', 'gi_002', 'gi_003', 'general_001', 'cardio_007'],
    prevalence: '1 in 50,000',
    rarity: 'rare',
    geneticMarkers: ['C1NH gene mutation', 'C1 esterase inhibitor deficiency'],
    ageGroup: ['6-12', '13-18', '19-29', '30-50'],
    moreInfo: 'Hereditary angioedema is caused by C1NH gene mutations affecting complement regulation.'
  },
  {
    id: 'disease_020',
    name: 'Alpha-1 Antitrypsin Deficiency',
    description: 'A genetic disorder affecting the lungs and liver.',
    symptoms: ['resp_001', 'resp_003', 'resp_002', 'gi_004', 'endo_001', 'general_001'],
    prevalence: '1 in 2,000-5,000',
    rarity: 'rare',
    geneticMarkers: ['SERPINA1 gene mutation', 'Alpha-1 antitrypsin protein'],
    ageGroup: ['19-29', '30-50', '50+'],
    moreInfo: 'Alpha-1 antitrypsin deficiency is caused by SERPINA1 gene mutations and can cause lung and liver disease.'
  }
];