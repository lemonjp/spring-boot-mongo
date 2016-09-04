package info.youtown;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import info.youtown.repositories.MyDataMongoRepository;

@RestController
public class MyDataMongoRestController {

    @Autowired
    MyDataMongoRepository repository;

    @RequestMapping("/api")
    public List<MyDataMongo> restAll() {
        //Iterable<MyDataMongo> list = repository.findAll();
        return repository.findAll();
    }

    @RequestMapping("/api/{id}")
    public MyDataMongo restBy(@PathVariable String id) {
        return repository.findById(id);
    }
}
