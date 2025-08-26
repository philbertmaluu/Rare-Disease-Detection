import { Symptom } from '../types';

export const symptoms: Symptom[] = [
  // Neurological
  { id: 'neuro_001', name: 'Severe headaches', category: 'Neurological', severity: 'severe' },
  { id: 'neuro_002', name: 'Memory loss', category: 'Neurological', severity: 'moderate' },
  { id: 'neuro_003', name: 'Seizures', category: 'Neurological', severity: 'severe' },
  { id: 'neuro_004', name: 'Muscle weakness', category: 'Neurological', severity: 'moderate' },
  { id: 'neuro_005', name: 'Tremors', category: 'Neurological', severity: 'mild' },
  { id: 'neuro_006', name: 'Balance problems', category: 'Neurological', severity: 'moderate' },
  { id: 'neuro_007', name: 'Speech difficulties', category: 'Neurological', severity: 'moderate' },
  { id: 'neuro_008', name: 'Vision problems', category: 'Neurological', severity: 'moderate' },
  { id: 'neuro_009', name: 'Hearing loss', category: 'Neurological', severity: 'moderate' },
  { id: 'neuro_010', name: 'Cognitive decline', category: 'Neurological', severity: 'severe' },

  // Cardiovascular
  { id: 'cardio_001', name: 'Chest pain', category: 'Cardiovascular', severity: 'severe' },
  { id: 'cardio_002', name: 'Irregular heartbeat', category: 'Cardiovascular', severity: 'moderate' },
  { id: 'cardio_003', name: 'Shortness of breath', category: 'Cardiovascular', severity: 'moderate' },
  { id: 'cardio_004', name: 'Swelling in legs', category: 'Cardiovascular', severity: 'mild' },
  { id: 'cardio_005', name: 'High blood pressure', category: 'Cardiovascular', severity: 'moderate' },
  { id: 'cardio_006', name: 'Heart palpitations', category: 'Cardiovascular', severity: 'mild' },
  { id: 'cardio_007', name: 'Syncope (fainting)', category: 'Cardiovascular', severity: 'severe' },
  { id: 'cardio_008', name: 'Cyanosis (blue skin)', category: 'Cardiovascular', severity: 'severe' },

  // Respiratory
  { id: 'resp_001', name: 'Chronic cough', category: 'Respiratory', severity: 'moderate' },
  { id: 'resp_002', name: 'Wheezing', category: 'Respiratory', severity: 'moderate' },
  { id: 'resp_003', name: 'Difficulty breathing', category: 'Respiratory', severity: 'severe' },
  { id: 'resp_004', name: 'Chest tightness', category: 'Respiratory', severity: 'moderate' },
  { id: 'resp_005', name: 'Frequent respiratory infections', category: 'Respiratory', severity: 'moderate' },
  { id: 'resp_006', name: 'Blood in sputum', category: 'Respiratory', severity: 'severe' },

  // Gastrointestinal
  { id: 'gi_001', name: 'Chronic diarrhea', category: 'Gastrointestinal', severity: 'moderate' },
  { id: 'gi_002', name: 'Severe abdominal pain', category: 'Gastrointestinal', severity: 'severe' },
  { id: 'gi_003', name: 'Nausea and vomiting', category: 'Gastrointestinal', severity: 'moderate' },
  { id: 'gi_004', name: 'Weight loss', category: 'Gastrointestinal', severity: 'moderate' },
  { id: 'gi_005', name: 'Difficulty swallowing', category: 'Gastrointestinal', severity: 'moderate' },
  { id: 'gi_006', name: 'Bloating', category: 'Gastrointestinal', severity: 'mild' },
  { id: 'gi_007', name: 'Blood in stool', category: 'Gastrointestinal', severity: 'severe' },
  { id: 'gi_008', name: 'Severe constipation', category: 'Gastrointestinal', severity: 'moderate' },

  // Musculoskeletal
  { id: 'musculo_001', name: 'Joint pain', category: 'Musculoskeletal', severity: 'moderate' },
  { id: 'musculo_002', name: 'Muscle cramps', category: 'Musculoskeletal', severity: 'mild' },
  { id: 'musculo_003', name: 'Bone pain', category: 'Musculoskeletal', severity: 'moderate' },
  { id: 'musculo_004', name: 'Stiffness', category: 'Musculoskeletal', severity: 'mild' },
  { id: 'musculo_005', name: 'Muscle atrophy', category: 'Musculoskeletal', severity: 'severe' },
  { id: 'musculo_006', name: 'Joint swelling', category: 'Musculoskeletal', severity: 'moderate' },
  { id: 'musculo_007', name: 'Limited mobility', category: 'Musculoskeletal', severity: 'moderate' },

  // Dermatological
  { id: 'dermato_001', name: 'Unusual rash', category: 'Dermatological', severity: 'moderate' },
  { id: 'dermato_002', name: 'Skin discoloration', category: 'Dermatological', severity: 'mild' },
  { id: 'dermato_003', name: 'Excessive bruising', category: 'Dermatological', severity: 'moderate' },
  { id: 'dermato_004', name: 'Hair loss', category: 'Dermatological', severity: 'mild' },
  { id: 'dermato_005', name: 'Skin lesions', category: 'Dermatological', severity: 'moderate' },
  { id: 'dermato_006', name: 'Itching', category: 'Dermatological', severity: 'mild' },

  // Endocrine
  { id: 'endo_001', name: 'Extreme fatigue', category: 'Endocrine', severity: 'moderate' },
  { id: 'endo_002', name: 'Unexplained weight gain', category: 'Endocrine', severity: 'moderate' },
  { id: 'endo_003', name: 'Temperature sensitivity', category: 'Endocrine', severity: 'mild' },
  { id: 'endo_004', name: 'Excessive thirst', category: 'Endocrine', severity: 'moderate' },
  { id: 'endo_005', name: 'Frequent urination', category: 'Endocrine', severity: 'mild' },
  { id: 'endo_006', name: 'Growth abnormalities', category: 'Endocrine', severity: 'severe' },

  // Hematological
  { id: 'hemato_001', name: 'Easy bruising', category: 'Hematological', severity: 'mild' },
  { id: 'hemato_002', name: 'Prolonged bleeding', category: 'Hematological', severity: 'severe' },
  { id: 'hemato_003', name: 'Pale skin', category: 'Hematological', severity: 'mild' },
  { id: 'hemato_004', name: 'Enlarged lymph nodes', category: 'Hematological', severity: 'moderate' },
  { id: 'hemato_005', name: 'Frequent infections', category: 'Hematological', severity: 'moderate' },

  // Renal/Urological
  { id: 'renal_001', name: 'Blood in urine', category: 'Renal', severity: 'severe' },
  { id: 'renal_002', name: 'Kidney pain', category: 'Renal', severity: 'moderate' },
  { id: 'renal_003', name: 'Protein in urine', category: 'Renal', severity: 'moderate' },
  { id: 'renal_004', name: 'Decreased urine output', category: 'Renal', severity: 'severe' },

  // Ophthalmological
  { id: 'ophthal_001', name: 'Night blindness', category: 'Ophthalmological', severity: 'moderate' },
  { id: 'ophthal_002', name: 'Double vision', category: 'Ophthalmological', severity: 'moderate' },
  { id: 'ophthal_003', name: 'Eye pain', category: 'Ophthalmological', severity: 'mild' },
  { id: 'ophthal_004', name: 'Light sensitivity', category: 'Ophthalmological', severity: 'mild' },

  // General/Constitutional
  { id: 'general_001', name: 'Fever', category: 'General', severity: 'mild' },
  { id: 'general_002', name: 'Night sweats', category: 'General', severity: 'mild' },
  { id: 'general_003', name: 'Malaise', category: 'General', severity: 'mild' },
  { id: 'general_004', name: 'Sleep disturbances', category: 'General', severity: 'mild' },
  { id: 'general_005', name: 'Mood changes', category: 'General', severity: 'mild' }
];