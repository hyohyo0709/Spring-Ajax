package part03;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;

public class EmployeeDAOImp implements EmployeeDAO{

	private SqlSessionTemplate sqlSession;
	
	public void setSqlSession(SqlSessionTemplate sqlSession) {
		this.sqlSession = sqlSession;
	}
	
	public EmployeeDAOImp() {
		// TODO Auto-generated constructor stub
	}
	
	@Override
	public List<EmployeeDTO> search(String data) {
		
		return sqlSession.selectList("search", data);
	}
}
