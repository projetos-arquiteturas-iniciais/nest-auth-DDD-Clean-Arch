import { DynamicType } from '@shared/types';

export abstract class DatabaseUtils<T> {
  protected abstract allowedFields: (keyof T)[];

  protected createSelectByFields = (selectFields: (keyof T)[]) => {
    const select: Partial<DynamicType<T, boolean>> = {};
    const fields = this.removeNotAllowedFields(selectFields);

    fields.forEach((field) => {
      select[field] = true;
    });

    return fields.length > 0 ? select : null;
  };

  protected createQueryBuilderSelectByFields = (
    entityName: string,
    selectFields: (keyof T)[],
  ) => {
    const select = [];
    const fields = this.removeNotAllowedFields(selectFields);

    fields.forEach((field) => {
      select.push(`${entityName}.${field as string}`);
    });

    return fields.length > 0 ? select : null;
  };

  private removeNotAllowedFields(selectFields: (keyof T)[]): (keyof T)[] {
    return selectFields.filter((field: keyof T) => {
      return this.allowedFields.includes(field);
    });
  }
}
