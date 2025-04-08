// Employee data model types

export interface Employee {
  id: number;
  name: string;
  department: string;
  jobTitle: string;
  performanceRating: number; // Scale of 1-5
  attendancePercentage: number; // 0-100%
  turnoverStatus: TurnoverStatus;
  workingHours: WorkingHours;
  engagementScore: number; // Scale of 1-10
}

export interface WorkingHours {
  average: number; // Average hours per day
  overtime: number; // Overtime hours per week
}

export interface TurnoverStatus {
  active: boolean;
  dateLeft?: string; // ISO date string, only present if active is false
  reason?: string; // Only present if active is false
}

// Department enum
export enum Department {
  Engineering = "Engineering",
  Sales = "Sales",
  Marketing = "Marketing",
  HumanResources = "Human Resources",
  Finance = "Finance",
  Operations = "Operations",
  CustomerSupport = "Customer Support",
  Legal = "Legal",
  Research = "Research",
  Executive = "Executive"
}

// For metrics and filtering
export interface PerformanceMetrics {
  averageRating: number;
  ratingDistribution: Map<number, number>; // Map of rating -> count
  departmentAverages: Map<string, number>; // Map of department -> average rating
}

export interface AttendanceMetrics {
  overallAttendance: number; // Average attendance percentage
  departmentAttendance: Map<string, number>; // Map of department -> attendance percentage
}

export interface TurnoverMetrics {
  turnoverRate: number; // Percentage of employees who left
  reasonDistribution: Map<string, number>; // Map of reason -> count
  departmentTurnover: Map<string, number>; // Map of department -> turnover rate
}

export interface WorkingHoursMetrics {
  averageDailyHours: number;
  overtimePercentage: number;
  departmentHours: Map<string, number>; // Map of department -> average hours
}

export interface EngagementMetrics {
  averageScore: number;
  scoreDistribution: Map<number, number>; // Map of score -> count
  departmentEngagement: Map<string, number>; // Map of department -> average score
} 