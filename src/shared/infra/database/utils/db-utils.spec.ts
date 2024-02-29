import { DatabaseUtils } from '@shared/infra/database';

interface Props {
  id: string;
  name: string;
  password: string;
}

class Stub extends DatabaseUtils<Props> {
  protected allowedFields: (keyof Props)[] = ['id', 'name'];
}

describe('DatabaseUtils unit tests', () => {
  const sut = new Stub();

  describe('createSelectByFields', () => {
    it('should create select by given fields', () => {
      const createSelectByFields = sut['createSelectByFields'];
      const result = createSelectByFields(['name']);

      expect(result).toStrictEqual({ name: true });
    });

    it('should create select by given fields with only allowed fields', () => {
      const createSelectByFields = sut['createSelectByFields'];
      const result = createSelectByFields(['id', 'name', 'password']);

      expect(result).toStrictEqual({ id: true, name: true });
    });

    it('should return null if given fields are not allowed or exists', () => {
      const createSelectByFields = sut['createSelectByFields'];
      let result = createSelectByFields(['email' as any]);

      expect(result).toBeNull();

      result = createSelectByFields(['password']);

      expect(result).toBeNull();
    });
  });

  describe('createQueryBuilderSelectByFields', () => {
    it('should create QueryBuilderSelect by given fields', () => {
      const createQueryBuilderSelectByFields =
        sut['createQueryBuilderSelectByFields'];
      const result = createQueryBuilderSelectByFields('props', ['name']);

      expect(result).toStrictEqual(['props.name']);
    });

    it('should create QueryBuilderSelect by given fields with only allowed fields', () => {
      const createQueryBuilderSelectByFields =
        sut['createQueryBuilderSelectByFields'];
      const result = createQueryBuilderSelectByFields('props', [
        'id',
        'name',
        'password',
      ]);

      expect(result).toStrictEqual(['props.id', 'props.name']);
    });

    it('should return null if given fields are not allowed or exists', () => {
      const createQueryBuilderSelectByFields =
        sut['createQueryBuilderSelectByFields'];
      let result = createQueryBuilderSelectByFields('props', ['email' as any]);

      expect(result).toBeNull();

      result = createQueryBuilderSelectByFields('props', ['password']);

      expect(result).toBeNull();
    });
  });
});
