export interface IBaseEntityDB {
  id: string;
  deletedAt?: Date;
  createdBy?: string;
  status?: string;
}

export interface IBaseEntityDBWithAuditFields extends IBaseEntityDB {
  createdAt?: Date;
  updatedBy?: string;
  deletedBy?: string;
}
