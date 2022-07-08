package part03;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;


// http://localhost:8090/myapp/empsearch.do


//@RestController = controller + responsebody


@Controller
public class EmployeeController {

	private EmployeeDAO dao;
	
	public EmployeeController() {
		// TODO Auto-generated constructor stub
	}
	
	public void setDao(EmployeeDAO dao) {
		this.dao = dao;
	}
	
	
	@RequestMapping(value = "/empsearch.do", method = RequestMethod.GET)
	public String execute() {
		return "part03/empList";
	}
	
	@ResponseBody
	@RequestMapping(value = "/empsearch.do", method = RequestMethod.POST)
	public List<EmployeeDTO> process(String data){
		return dao.search(data);
	}
	
	
}
