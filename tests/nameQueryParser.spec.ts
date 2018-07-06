import * as queryParser from '../src/nameQueryParser';


describe('Name Query Parser', () => {
  
  it('should return the query value', () => {
    let query = 'name=myName&acomplex_querySoWeCan&Screw;name=it';
    const parseResult = queryParser(query);
    expect(parseResult).toBe('myName');
  });

  it('should return [name]', () => {
    let query = 'no_name_inthequeryparam';
    const parseResult = queryParser(query);
    expect(parseResult).toBe('[name]');
  });

})