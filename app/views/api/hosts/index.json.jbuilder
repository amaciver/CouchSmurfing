@hosts.each do |host|
  json.set! host.id do
    json.extract! host, :id, :name,
     :age, :location, :lat, :lng, :image_url, :interests, :status
  end
end
