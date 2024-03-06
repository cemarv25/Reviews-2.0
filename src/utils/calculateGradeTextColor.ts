export default function calculateGradeTextColor(grade: number) {
  if (grade >= 0 && grade < 50) {
    return 'text-red-600';
  }
  if (grade >= 50 && grade < 60) {
    return 'text-amber-400';
  }
  if (grade >= 60 && grade < 75) {
    return 'text-yellow-300';
  }
  if (grade >= 75 && grade < 90) {
    return 'text-lime-600';
  }
  if (grade >= 90 && grade <= 100) {
    return 'text-green-600';
  }

  return '';
}
