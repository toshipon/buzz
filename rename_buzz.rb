
count = 0
Dir::foreach('./buzz') { |f|
    count = count + 1
    time = Time.now
    from = './buzz/' + f
    mt = File::mtime('./buzz/'.concat(f))
	to = './buzz/' + format("%04d", mt.year) + format("%02d", mt.month) + format("%02d", mt.day) + format("%02d", mt.min) + format("%02d", mt.sec) + ".html"
	if File::ftype(from) == "file"
       File::rename from, to
    end
}





