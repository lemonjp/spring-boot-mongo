package info.youtown.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import info.youtown.MyDataMongo;

public interface MyDataMongoRepository extends MongoRepository<MyDataMongo, Long> {
    public List<MyDataMongo> findByName(String s);
    public MyDataMongo findById(String id);
}

